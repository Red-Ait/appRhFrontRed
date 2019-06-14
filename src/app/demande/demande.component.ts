import { Component, OnInit } from '@angular/core';
import {DemandeService} from "../../service/DemandeService";
import {CollaborateurService} from "../../service/CollaborateurService";
import {DemandeAbsenceService} from "../../service/DemandeAbsenceService";
import {DemandeAttestationService} from "../../service/DemandeAttestationService";
import {DemandeAuTravService} from "../../service/DemandeAuTravService";
import {DemandeAuthSortieService} from "../../service/DemandeAuthSortieService";
import {TokenStorageService} from "../../service/TokenStorageService";

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {

  demandeDetails = null;
  colonAbs = {
    id : true,
    collaborateur : true,
    dateDemande : true,
    observation : true,
    status : true,
    dateDebut : true,
    dateFin : false,
    exercice : false,
    jourOuvrable : false,
    repos : false,
    feries : false,
    motifRefus : false,
  };
  colonSortie = {
    id : true,
    collaborateur : true,
    dateDemande : true,
    observation : true,
    status : true,
    dateSortie : false,
    heureSortie : false,
    heureReteur : false,
    motifSortie : false,
    motifRefus : false
  };
  addOk = false;
  demandeAbsence = null;
  demandeAttestation = null;
  demandeSortie = null;
  demandeTravail = null;
  collabs = null;
  typeDemande = 'absence';
  motifRefus = '';
  isChef = false;
  constructor(
    private collabService: CollaborateurService,
    private demandeService: DemandeService,
    private demandeAbsenceService: DemandeAbsenceService,
    private tokenStorageService: TokenStorageService,
    private demandeAttestService: DemandeAttestationService,
    private demandeTrvService: DemandeAuTravService,
    private demandeSortService: DemandeAuthSortieService) { }

  ngOnInit() {
        this.tokenStorageService.getAuthorities().forEach(role => {
          if (role === 'ROLE_CHEF_SERVICE') {
            this.isChef = true;
          }
        });
        if ( this.isChef) {
          this.demandeAbsenceService.allDemandeAbsences().subscribe(data => {
            this.demandeAbsence = data;
            console.log(data);
          });
          this.demandeAttestService.allDemandeAttestations().subscribe(data => {
            this.demandeAttestation = data;
          });
          this.demandeSortService.allDemandeAuthSorties().subscribe(dat => {
            this.demandeSortie = dat;
          });
          this.demandeTrvService.allDemandeAuTravs().subscribe(d => {
            this.demandeTravail = d;
          });
        } else {

          this.demandeAbsenceService.allDemandeAbsencesEmpl(this.tokenStorageService.getUsername()).subscribe(data => {
            this.demandeAbsence = data;
            console.log(data);
          });
          this.demandeAttestService.allDemandeAttestationsEmpl(this.tokenStorageService.getUsername()).subscribe(data => {
            this.demandeAttestation = data;
          });
          this.demandeSortService.allDemandeAuthSortiesEmpl(this.tokenStorageService.getUsername()).subscribe(dat => {
            this.demandeSortie = dat;
          });
          this.demandeTrvService.allDemandeAuTravsEmpl(this.tokenStorageService.getUsername()).subscribe(d => {
            this.demandeTravail = d;
          });
        }
    }
    demandeDetailInit(d: any) {
      this.demandeDetails = d;
      console.log(this.demandeDetails);
    }
  choseColonAbsence() {}
  choseColonSortie() {}
  refuser() {
    this.demandeDetails.isErr = false;
    if(!this.demandeDetails.refuse)
    {
    this.demandeDetails.refuse = true;
  } else {
      if (this.motifRefus === '' || this.motifRefus === null) {
        this.demandeDetails.isErr = true;
      } else {
        this.demandeDetails.motifRefus = this.motifRefus;
        switch (this.typeDemande) {
          case 'absence':
            this.demandeAbsenceService.updateDemandeAbsence(this.demandeDetails).subscribe(d => {
              console.log(d);
              this.demandeDetails.refuse = false;
            });
            break;
          case 'attestation':
            this.demandeAttestService.updateDemandeAttestation(this.demandeDetails).subscribe(d => {
              console.log(d);
              this.demandeDetails.refuse = false;
            });
            break;
          case 'sortie':
            let time = new Date();
            time.setHours(+this.demandeDetails.heureSortie.split(':')[0]);
            time.setMinutes(+this.demandeDetails.heureSortie.split(':')[1]);
            console.log(time);
            this.demandeDetails.heureSortie = time;
            time.setHours(+this.demandeDetails.heureReteur.split(':')[0]);
            time.setMinutes(+this.demandeDetails.heureReteur.split(':')[1]);
            console.log(time);
            this.demandeDetails.heureReteur = time;
            this.demandeSortService.updateDemandeAuthSortie(this.demandeDetails).subscribe(d => {
              console.log(d);
//              this.demandeDetails.heureReteur = this.demandeDetails.heureReteur.split(' ')[4];
  //            this.demandeDetails.heureSortie = this.demandeDetails.heureSortie.split(' ')[4];
              this.demandeDetails.refuse = false;
            });
            break;
        }
      }
    }
}
}
