import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CollaborateurService} from "../../service/CollaborateurService";
import {TypeAdresseService} from "../../service/TypeAdresseService";
import {AdresseService} from "../../service/AdresseService";
import {DomaineService} from "../../service/DomaineService";
import {NiveauScolaireAttestationService} from "../../service/NiveauScolaireAttestationService";
import {TypeAttestationService} from "../../service/TypeAttestationService";
import {VilleService} from "../../service/VilleService";
import {AttestationFormationService} from "../../service/AttestationFormationService";
import {DelivreParService} from "../../service/DelivreParService";
import {ContratService} from "../../service/ContratService";
import {FonctionService} from "../../service/FonctionService";
import {TypeActiviteService} from "../../service/TypeActiviteService";
import {TypeContratService} from "../../service/TypeContratService";
import {MotifEntreeService} from "../../service/MotifEntreeService";
import {MotifDepartService} from "../../service/MotifDepartService";
import {StatusProfessionnelService} from "../../service/StatusProfessionnelService";

@Component({
  selector: 'app-profil-collaborateur',
  templateUrl: './profil-collaborateur.component.html',
  styleUrls: ['./profil-collaborateur.component.css']
})
export class ProfilCollaborateurComponent implements OnInit {

  sub: any;
  newAdresse = {
    adresseType: null,
    codePostal: '',
    ligne1: '',
    ligne2: '',
    pays: '',
    type: '',
    ville: '',
    contact: null
  };
  delivrePar = null;
  domaines = null;
  newAttestation = {
    dateObtention: '',
    delivrePar: null,
    domaine: null,
    mention: '',
    niveauScolaire: null,
    nomEtablissement: '',
    specialite: '',
    typeAttestation: null,
    ville: null
  };
  newCoordonnesBancaires = {
    agence: '',
    banque: null,
    numRIB: ''
  };
  newDocument = {
    description: '',
    documentType: null,
    fichier: ''
  };
  newContrat = {
    ancieneteAjoute: '',
    dateDebut: null,
    dateDepart: null,
    dateFin: null,
    fonction: null,
    motifDepart: null,
    motifEntree: null,
    periodeEssai1: null,
    periodeEssai2: null,
    qualification: null,
    rumeniration: null,
    statusProfessionnel: null,
    typeActivite: null,
    typeContrat: null
  };
  typeContrats = null;
  typeActivites = null;
  fonctions = null;
  villes = null;
  motifDeparts = null;
  motifEntrees = null;
  niveauScolaireAttestations = null;
  typesAttestation = null;
  collabId = 0;
  collabInfo = null;
  addContratOk = false;
  addAdressOk = false;
  addAttesOk = false;
  typesAdresse = null;
  statusProfessionnels = null;
  constructor(private collaborateurService: CollaborateurService,
              private motifEntreeService: MotifEntreeService,
              private motifDepartService: MotifDepartService,
              private typeContratService: TypeContratService,
              private typeActiviteService: TypeActiviteService,
              private niveauScolaireAttestationService: NiveauScolaireAttestationService,
              private fonctionService: FonctionService,
              private typeAdrsseService: TypeAdresseService,
              private delivreParService: DelivreParService,
              private statusProfessionnelService: StatusProfessionnelService,
              private contratService: ContratService,
              private attestationFormationService: AttestationFormationService,
              private domaineService: DomaineService,
              private typesAttestaionService: TypeAttestationService,
              private adresseService: AdresseService,
              private villeService: VilleService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.collabId = +params['id'];
      console.log(this.collabId);
      this.collaborateurService.getCollaborateurById(this.collabId).subscribe(data => {
        this.collabInfo = data;
        console.log(this.collabInfo);
      });
    });
    this.typeAdrsseService.allTypeAdresses().subscribe(data => {
      this.typesAdresse = data;
    });
    this.domaineService.allDomaines().subscribe(data => {
      this.domaines = data;
      console.log(this.domaines);
    });
    this.niveauScolaireAttestationService.allNiveauScolaireAttestations().subscribe(data => {
      this.niveauScolaireAttestations = data;
    });
    this.delivreParService.allDelivrePars().subscribe(data => {
      this.delivrePar = data;
    });
    this.typesAttestaionService.allTypeAttestations().subscribe(data => {
      this.typesAttestation = data;
    });
    this.villeService.allVilles().subscribe(data => {
      this.villes = data;
    });
    this.fonctionService.allFonctions().subscribe(data => {
      this.fonctions = data;
    });
    this.typeActiviteService.allTypeActivites().subscribe(data => {
      this.typeActivites = data;
    });
    this.typeContratService.allTypeContrats().subscribe(data => {
      this.typeContrats = data;
    });
    this.motifDepartService.allMotifDeparts().subscribe(data => {
      this.motifDeparts = data;
    });
    this.motifEntreeService.allMotifEntrees().subscribe(data => {
      this.motifEntrees = data;
    });
    this.statusProfessionnelService.allStatusProfessionnels().subscribe(data => {
      this.statusProfessionnels = data;
    });
  }
  addAdresse() {
    console.log(this.newAdresse);
    this.adresseService.addAdresse(this.newAdresse, this.collabInfo.id).subscribe(data => {
      console.log(data);
      this.newAdresse = {
        adresseType: null,
        codePostal: '',
        ligne1: '',
        ligne2: '',
        pays: '',
        type: '',
        ville: '',
        contact: null
      };
      this.addAdressOk = true;
      this.collabInfo.adresses.push(data);
    });
  }
  addAttestation() {
    this.attestationFormationService.addAttestationFormation(this.newAttestation, this.collabInfo.id).subscribe(data => {
      console.log(data);
      this.addAttesOk = true;
      this.newAttestation = {
        dateObtention: '',
        delivrePar: null,
        domaine: null,
        mention: '',
        niveauScolaire: null,
        nomEtablissement: '',
        specialite: '',
        typeAttestation: null,
        ville: null
      };

    });
  }
  addContrat() {
    this.contratService.addContrat(this.newContrat, this.collabInfo.id).subscribe(data => {
      console.log(data);
      this.newContrat = {
        ancieneteAjoute: '',
        dateDebut: null,
        dateDepart: null,
        dateFin: null,
        fonction: null,
        motifDepart: null,
        motifEntree: null,
        periodeEssai1: null,
        periodeEssai2: null,
        qualification: null,
        rumeniration: null,
        statusProfessionnel: null,
        typeActivite: null,
        typeContrat: null
      };
      this.collabInfo.conrats.push(data);
    })
  }
}
