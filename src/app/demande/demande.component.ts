import { Component, OnInit } from '@angular/core';
import {DemandeService} from "../../service/DemandeService";
import {CollaborateurService} from "../../service/CollaborateurService";
import {DemandeAbsenceService} from "../../service/DemandeAbsenceService";
import {DemandeAttestationService} from "../../service/DemandeAttestationService";
import {DemandeAuTravService} from "../../service/DemandeAuTravService";
import {DemandeAuthSortieService} from "../../service/DemandeAuthSortieService";

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {

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
    motifRefus : false
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
  constructor(
    private collabService: CollaborateurService,
    private demandeAbsenceService: DemandeAbsenceService,
    private demandeAttestService: DemandeAttestationService,
    private demandeTrvService: DemandeAuTravService,
    private demandeSortService: DemandeAuthSortieService) { }

  ngOnInit() {
    this.demandeAbsenceService.allDemandeAbsences().subscribe(data => {
      this.demandeAbsence = data;
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
    }
  choseColonAbsence() {}
  choseColonSortie() {}
  initAdd() {
    this.collabService.allCollaborateurs(null , null).subscribe(d => {
      this.collabs = d;
    });
  }

}
