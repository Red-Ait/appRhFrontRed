import { Component, OnInit } from '@angular/core';
import {CollaborateurService} from "../../service/CollaborateurService";
import {MotifAbsenceService} from "../../service/MotifAbsenceService";
import {DemandeService} from "../../service/DemandeService";
import {DemandeAbsenceService} from "../../service/DemandeAbsenceService";
import {TypeAttestationEntrepriseService} from "../../service/TypeAttestationEntrepriseService";
import {DemandeAttestationService} from "../../service/DemandeAttestationService";
import {MotifSortieService} from "../../service/MotifSortieService";
import {DemandeAuthSortieService} from "../../service/DemandeAuthSortieService";

@Component({
  selector: 'app-add-demande',
  templateUrl: './add-demande.component.html',
  styleUrls: ['./add-demande.component.css']
})
export class AddDemandeComponent implements OnInit {

  newDemandeAbsErr = {
    collaborateur : false,
    dateDemande : false,
    observation : false,
    dateDebut : false,
    dateDebut2 : false,
    dateFin : false,
    dateFin2 : false,
    exercice : false,
    jourOuvrable : false,
    motifAbsence : false,
    repos : false,
    feries : false
  };
  newDemandeAbs = {
    collaborateur : null,
    dateDemande : new Date(),
    observation : '',
    dateDebut : '',
    dateFin : '',
    exercice : 0,
    jourOuvrable : 0,
    repos : 0,
    motifAbsence : null,
    feries : 0
  };
  newDemandeAttesErr = {
    collaborateur : false,
    dateDemande : false,
    observation : false,
    typeAttestationEntreprise : false
  };
  newDemandeAttes = {
    collaborateur : null,
    dateDemande : new Date(),
    observation : '',
    typeAttestationEntreprise : null
  };
  newDemandeSortie = {
    collaborateur : null,
    dateDemande : new Date(),
    observation : '',
    dateSortie : '',
    heureSortie : null,
    heureReteur : null,
    motifSortie : null
  };
  newDemandeSortieErr = {
    collaborateur : false,
    dateDemande : false,
    observation : false,
    dateSortie : false,
    dateSortie2 : false,
    heureSortie : false,
    heureReteur : false,
    motifSortie : false
  };
  addOk = false;
  collabs = null;
  motifSortie = null;
  typeDemande = 'absence';
  motifAbs = null;
  typeAttestationEntreprise = null;
  constructor(private collabService: CollaborateurService,
              private motifAbsService: MotifAbsenceService,
              private motifSortieService: MotifSortieService,
              private demandeAbsenceService: DemandeAbsenceService,
              private demandeAttesService: DemandeAttestationService,
              private demandeSortieService: DemandeAuthSortieService,
              private typeAttestationEntrepriseService: TypeAttestationEntrepriseService
              ) { }

  ngOnInit() {
    this.motifSortieService.allMotifSorties().subscribe(d => this.motifSortie = d);
    this.motifAbsService.allMotifAbsences().subscribe(d => this.motifAbs = d);
    this.collabService.allCollaborateurs(null , null).subscribe(d => {
      this.collabs = d;
    });
    this.typeAttestationEntrepriseService.allTypeAttestationEntreprises().subscribe(d => this.typeAttestationEntreprise = d);
  }
  addDemandeSortie() {
    let isOk = true;
   if(this.newDemandeSortie.collaborateur === null) {
     this.newDemandeSortieErr.collaborateur = true;
     isOk = false;
   } else {
     this.newDemandeSortieErr.collaborateur = false;
   }
   if(this.newDemandeSortie.dateSortie === '') {
     isOk = false;
     this.newDemandeSortieErr.dateSortie = true;
   } else {
     this.newDemandeSortieErr.dateSortie = false;
   }
   if(new Date(this.newDemandeSortie.dateSortie).getTime() < new Date().getTime()) {
     isOk = false;
     this.newDemandeSortieErr.dateSortie2 = true;
   } else {
     this.newDemandeSortieErr.dateSortie2 = false;
   }
    if(this.newDemandeSortie.heureSortie === null) {
      isOk = false;
      this.newDemandeSortieErr.heureSortie = true;
    } else {
      this.newDemandeSortieErr.heureSortie = false;
    }
    if(this.newDemandeSortie.heureReteur === null) {
      isOk = false;
      this.newDemandeSortieErr.heureReteur = true;
    } else {
      this.newDemandeSortieErr.heureReteur = false;
    }
    if(this.newDemandeSortie.motifSortie === null) {
      isOk = false;
      this.newDemandeSortieErr.motifSortie = true;
    } else {
      this.newDemandeSortieErr.motifSortie = false;
    }
    if (isOk) {
      let time = new Date();
      time.setHours(+this.newDemandeSortie.heureSortie.split(':')[0]);
      time.setMinutes(+this.newDemandeSortie.heureSortie.split(':')[1]);
      console.log(time);
      this.newDemandeSortie.heureSortie = time;
      time.setHours(+this.newDemandeSortie.heureReteur.split(':')[0]);
      time.setMinutes(+this.newDemandeSortie.heureReteur.split(':')[1]);
      console.log(time);
      this.newDemandeSortie.heureReteur = time;
      this.demandeSortieService.addDemandeAuthSortie(this.newDemandeSortie).subscribe(d => {
        this.newDemandeSortie = {
          collaborateur : null,
          dateDemande : new Date(),
          observation : '',
          dateSortie : '',
          heureSortie : '',
          heureReteur : '',
          motifSortie : null
        };
        this.addOk = true;
      })
    }
  }
  addDemandeAbs() {
    let isOk = true;
    if (this.newDemandeAbs.collaborateur === null) {
      this.newDemandeAbsErr.collaborateur = true;
      isOk = false;
    } else {
      this.newDemandeAbsErr.collaborateur = false;
    }
    if(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0 , 0, 0, 0).getTime() > new Date(this.newDemandeAbs.dateDebut).getTime()) {
      this.newDemandeAbsErr.dateDebut2 = true;
      isOk = false;
    } else {
      this.newDemandeAbsErr.dateDebut2 = false;
    }
    if (this.newDemandeAbs.dateDebut === '') {
      this.newDemandeAbsErr.dateDebut = true;
      isOk = false;
    } else {
      this.newDemandeAbsErr.dateDebut = false;
    }
    if (this.newDemandeAbs.dateFin === '') {
      this.newDemandeAbsErr.dateFin = true;
      isOk = false;
    } else {
      this.newDemandeAbsErr.dateFin = false;
    }
    if (this.newDemandeAbs.motifAbsence === null) {
      this.newDemandeAbsErr.motifAbsence = true;
      isOk = false;
    } else {
      this.newDemandeAbsErr.motifAbsence = false;
    }
    if (this.newDemandeAbs.jourOuvrable < 0 || this.newDemandeAbs.jourOuvrable === null) {
      isOk = false;
      this.newDemandeAbsErr.jourOuvrable = true;
    } else {
      this.newDemandeAbsErr.jourOuvrable = false;
    }
    if (this.newDemandeAbs.feries < 0 || this.newDemandeAbs.feries === null) {
      isOk = false;
      this.newDemandeAbsErr.feries = true;
    } else {
      this.newDemandeAbsErr.feries = false;
    }
    if (this.newDemandeAbs.repos < 0 || this.newDemandeAbs.repos === null) {
      isOk = false;
      this.newDemandeAbsErr.repos = true;
    } else {
      this.newDemandeAbsErr.repos = false;
    }
    if (this.newDemandeAbs.dateFin < this.newDemandeAbs.dateDebut) {
      isOk = false;
      this.newDemandeAbsErr.dateFin2 = true;
    } else {
      this.newDemandeAbsErr.dateFin2 = false;
    }
    if (isOk) {
      this.demandeAbsenceService.addDemandeAbsence(this.newDemandeAbs).subscribe(d => {
        console.log(d);
        this.newDemandeAbs = {
          collaborateur : null,
          dateDemande : new Date(),
          observation : '',
          dateDebut : '',
          dateFin : '',
          exercice : 0,
          jourOuvrable : 0,
          repos : 0,
          motifAbsence : null,
          feries : 0
        };
        this.addOk = true;
      });
    }
  }
  addDemandeAttes () {
    let isOk = true;
    if (this.newDemandeAttes.collaborateur === null) {
      this.newDemandeAttesErr.collaborateur = true;
      isOk = false;
    } else {
      this.newDemandeAttesErr.collaborateur = false;
    }
    if (this.newDemandeAttes.typeAttestationEntreprise === null) {
      this.newDemandeAttesErr.typeAttestationEntreprise = true;
      isOk = false;
    } else {
      this.newDemandeAttesErr.typeAttestationEntreprise = false;
    }
    if (isOk) {
      this.demandeAttesService.addDemandeAttestation(this.newDemandeAttes).subscribe(d => {
        this.addOk = true;
        this.newDemandeAttes = {
          collaborateur : null,
          dateDemande : new Date(),
          observation : '',
          typeAttestationEntreprise : null
        };
      });
    }
  }
}
