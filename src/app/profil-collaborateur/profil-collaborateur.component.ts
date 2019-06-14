import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
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
import {BanqueService} from "../../service/BanqueService";
import {CoordonnesBancairesService} from "../../service/CoordonnesBancairesService";
import {TypeDocumentService} from "../../service/TypeDocumentService";
import {DocumentService} from "../../service/DocumentService";
import {TypeEmailService} from "../../service/TypeEmailService";
import {EmailService} from "../../service/EmailService";
import {LangueService} from "../../service/LangueService";
import {NiveauLangueService} from "../../service/NiveauLangueService";
import {LanguesService} from "../../service/LanguesService";
import {GroupeService} from "../../service/GroupeService";
import {LigneGroupeService} from "../../service/LigneGroupeService";
import {TypePeriodeDepartementService} from "../../service/TypePeriodeDepartementService";
import {DepartementService} from "../../service/DepartementService";
import {PeriodeDepartementService} from "../../service/PeriodeDepartementService";
import {TypeReseauSocialService} from "../../service/TypeReseauSocialService";
import {ReseauSocialService} from "../../service/ReseauSocialService";
import {TypeTelephoneService} from "../../service/TypeTelephoneService";
import {TelephoneService} from "../../service/TelephoneService";
import {CategorieService} from "../../service/CategorieService";
import {NiveauScolaireContactService} from "../../service/NiveauScolaireContactService";
import {LocalStorage} from "@ngx-pwa/local-storage";
import {UploadPhotoCollaborateurService} from "../../service/UploadPhotoCollaborateurService";
import {HttpClient, HttpEventType, HttpResponse} from "@angular/common/http";
import {UploadPdfAttestationFromationService} from "../../service/UploadPdfAttestationFromationService";
import {UploadPdfContratService} from "../../service/UploadPdfContratService";
import {AuthService} from "../../service/AuthService";
import {TokenStorageService} from "../../service/TokenStorageService";
import {UtilisateurService} from "../../service/UserService";

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
  colonAdresse = {
    adresseType: true,
    codePostal: true,
    ligne1: true,
    ligne2: true,
    pays: true,
    type: true,
    ville: true,
    contact: true
  };
  newResSoc = {
    description: '',
    typeReseauSocial: null,
  url: '',
  username: ''
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
  colonAttestation = {
    dateObtention: true,
    delivrePar: true,
    domaine: true,
    mention: true,
    niveauScolaire: true,
    nomEtablissement: true,
    specialite: true,
    typeAttestation: false,
    ville: false
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
  newEmail = {
    adresseMail: '',
    emailType: null,
    observation: '',
  };
  newRole = '';
  newLangue = {
    langue: null,
    niveauLangue: null
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
  colonContrat = {
    ancieneteAjoute: true,
    dateDebut: true,
    dateDepart: true,
    dateFin: true,
    fonction: false,
    motifDepart: false,
    motifEntree: false,
    periodeEssai1: false,
    periodeEssai2: false,
    qualification: false,
    rumeniration: false,
    statusProfessionnel: false,
    typeActivite: false,
    typeContrat: true
  };
  newligneGroupes = {
    groupe: null
  };
  newPeriodeDep = {
    dateDebut: null,
    dateFin: null,
    departement: null,
    motif: '',
    typePeriodeDepartement: null
  };
  newTele = {
    numero: '',
    observation: '',
    type: '',
  typeTelephone: null
  };
  banques = null;
  typeContrats = null;
  typeActivites = null;
  fonctions = null;
  villes = null;
  motifDeparts = null;
  motifEntrees = null;
  niveauScolaireAttestations = null;
  typesAttestation = null;
  typeEmails = null;
  typesDocument = null;
  collabId = 0;
  collabInfo = null;
  addLangueOk = false;
  addResSocOk = false;
  addRoolOk = false;
  addContratOk = false;
  addAdressOk = false;
  addAttesOk = false;
  addCordonOk = false;
  addDocOk = false;
  addEmailOk = false;
  addGroupeOk = false;
  addTeleOk = false;
  addperiodeDepOk = false;
  typesAdresse = null;
  niveauLangues = null;
  langues = null;
  groupes = null;
  aux = null;
  departements = null;
  typePeriodeDepartements = null;
  statusProfessionnels = null;
  typeReseauSocials = null;
  typeTeles = null;
  popup = '';
  newCollabInfo = null;
  isUpdateCollabInfo = false;
  categories = null;
  niveauScolaireContacts = null;
  selectedPhotos: FileList;
  selectedFormation: FileList;
  selectedContrat: FileList;
  isRoot = false;
  currentFileUpload: File;
  isRh = false;
  apiUrl = 'http://localhost:8088/file/photocollab/files/';
  progress: { percentage: number } = { percentage: 0 };
  photoProfil = null;
  roles = null;
  isAddRole = false;
  rolesPage = null;
  constructor(
    private uploadAttesForm: UploadPdfAttestationFromationService,
    private uploadContratService: UploadPdfContratService,
    private uploadPhotoCollaborateurService: UploadPhotoCollaborateurService,
              private collaborateurService: CollaborateurService,
              private typeTeleService: TypeTelephoneService,
              private niveauScolaireContactService: NiveauScolaireContactService,
              private typeDocumentService: TypeDocumentService,
              private reseauSocialService: ReseauSocialService,
              private langueService: LangueService,
              private niveauLangueService: NiveauLangueService,
              private coordonnesBancairesService: CoordonnesBancairesService,
              private categorieService: CategorieService,
              private motifEntreeService: MotifEntreeService,
              private departementService: DepartementService,
              private typeReseauSocialService: TypeReseauSocialService,
              private documentService: DocumentService,
              private motifDepartService: MotifDepartService,
              private typeContratService: TypeContratService,
              private typeActiviteService: TypeActiviteService,
              private niveauScolaireAttestationService: NiveauScolaireAttestationService,
              private fonctionService: FonctionService,
              private typeAdrsseService: TypeAdresseService,
              private emailService: EmailService,
              private delivreParService: DelivreParService,
              private teleService: TelephoneService,
              private statusProfessionnelService: StatusProfessionnelService,
              private contratService: ContratService,
              private attestationFormationService: AttestationFormationService,
              private domaineService: DomaineService,
              private typesAttestaionService: TypeAttestationService,
              private adresseService: AdresseService,
              private villeService: VilleService,
              private banqueService: BanqueService,
              private typeEmailService: TypeEmailService,
              private languesService: LanguesService,
              private groupeService: GroupeService,
              private ligneGroupeService: LigneGroupeService,
              private  typePeriodDepService: TypePeriodeDepartementService,
              private periodeDepartementService: PeriodeDepartementService,
              public localStorage: LocalStorage,
              private uploadServ: UploadPhotoCollaborateurService,
              private auth: AuthService,
              private userService: UtilisateurService,
              private tokenStorageService: TokenStorageService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.tokenStorageService.getAuthorities().forEach(role => {
      if(role === 'ROLE_RH') {
        this.isRh = true;
      }
      if(role === 'ROLE_ROOT') {
        this.isRoot= true;
      }
    });

    this.sub = this.route.params.subscribe(params => {
      this.collabId = +params['id'];

      console.log(this.collabId);
      if(!isNaN(this.collabId ) ) {
        if(!(this.isRh || this.isRoot)) {
          this.router.navigate(['/role-erreur']);
        }
        this.collaborateurService.getCollaborateurById(this.collabId).subscribe(data => {
          this.collabInfo = data;
          this.userService.getUserByCollabId(this.collabId).subscribe(d => {
            this.aux = d;
            this.roles = new Array();
            this.aux.roles.forEach(r => {
              this.roles.push(r.name);
            });
          });
          console.log(this.collabInfo.photo);
        });
      } else {
        this.auth.getCurrentUser().subscribe(data => {
          this.collabInfo = data;
          this.collabInfo = this.collabInfo.contact;
          this.roles = this.tokenStorageService.getAuthorities();
        })
      }
    }, error1 => console.log('oooooooo'));
    this.localStorage.getItem('colonAdresse').subscribe(r => {
      if (r !== null) {
        this.colonAdresse = JSON.parse(r);
      }
    })
    this.localStorage.getItem('colonAttest').subscribe(r => {
      if (r !== null) {
        this.colonAttestation = JSON.parse(r);
      }
    })
    this.localStorage.getItem('colonContrat').subscribe(r => {
      if (r !== null) {
        this.colonContrat = JSON.parse(r);
      }
    })

  }
  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }
  choseColonContrat() {
    this.localStorage.setItem('colonContrat', JSON.stringify(this.colonContrat)).subscribe();
  }
  choseColonAttest() {
    this.localStorage.setItem('colonAttest', JSON.stringify(this.colonAttestation)).subscribe();
  }
  choseColonAdresse() {
    this.localStorage.setItem('colonAdresse', JSON.stringify(this.colonAdresse)).subscribe();
  }
  initEditCollabInfo() {
    if (this.isRh) {
      this.categorieService.allCategories().subscribe(d => {
        this.categories = d;
      });
      this.niveauScolaireContactService.allNiveauScolaireContacts().subscribe(d => {
        this.niveauScolaireContacts = d;
      });
      this.newCollabInfo = this.collabInfo;
      this.newCollabInfo.dateNaissance = this.formatDate(this.newCollabInfo.dateNaissance);
      this.isUpdateCollabInfo = true;
    }
  }
  editCollabInfo() {
    if(this.selectedPhotos) {
      this.uploadPhoto();
    }
    console.log(this.newCollabInfo);
    this.collaborateurService.updateCollaborateur(this.newCollabInfo).subscribe(d => {
      this.isUpdateCollabInfo = false;
      this.collabInfo = this.newCollabInfo;
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
      this.aux = data;
      if(this.selectedFormation) {
        this.uploadFormation(+ this.aux.id);
      }
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
  addRole() {
    this.userService.addRole(this.collabId, this.newRole).subscribe(d => {
      this.isAddRole = false;
      this.roles.push(this.newRole);
    });
  }
  addContrat() {
    this.contratService.addContrat(this.newContrat, this.collabInfo.id).subscribe(data => {
      this.aux = data;
      if(this.selectedContrat) {
        this.uploadContrat(+ this.aux.id);
      }
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
      this.collabInfo.contrats.push(data);
      this.addContratOk = true;
    })
  }
  addCordon () {
    this.coordonnesBancairesService.addCoordonnesBancaires(this.newCoordonnesBancaires, this.collabInfo.id).subscribe(data => {
      console.log(data);
      this.newCoordonnesBancaires = {
        agence: '',
        banque: null,
        numRIB: ''
      };
      this.collabInfo.coordonnesBancaires.push(data);
      this.addCordonOk = true;
    })
  }
  addDoc() {
    this.documentService.addDocument(this.newDocument, this.collabInfo.id).subscribe(data => {
      this.newDocument = {
        description: '',
        documentType: null,
        fichier: ''
      };
      this.addDocOk = true;
      this.collabInfo.documents.push(data);
    })
  }
  addEmail() {
    this.emailService.addEmail(this.newEmail, this.collabInfo.id).subscribe(data => {
      console.log(data);
      this.addEmailOk = true;
      this.collabInfo.emails.push(data);
      this.newEmail = {
        adresseMail: '',
        emailType: null,
        observation: '',
      };

    })
  }
  addLangue() {
    this.languesService.addLangues(this.newLangue, this.collabInfo.id).subscribe(data => {
      this.newLangue = {
        langue: null,
        niveauLangue: null
      };
      this.addLangueOk = true;
      this.collabInfo.langues.push(data);
    })
  }
  addGroupe() {
    this.ligneGroupeService.addLigneGroupe(this.newligneGroupes, this.collabInfo.id).subscribe(data => {
      this.newligneGroupes = {
        groupe: null
      };
      this.addGroupeOk = true;
      this.collabInfo.ligneGroupes.push(data);
    });
  }
  addperiodeDep() {
    this.periodeDepartementService.addPeriodeDepartement(this.newPeriodeDep, this.collabInfo.id).subscribe(d => {
      this.newPeriodeDep = {
        dateDebut: null,
        dateFin: null,
        departement: null,
        motif: '',
        typePeriodeDepartement: null
      };
      this.addperiodeDepOk = true;
      this.collabInfo.periodeDepartements.push(d);
    });
  }
  addResSoc() {
    this.reseauSocialService.addReseauSocial(this.newResSoc, this.collabInfo.id).subscribe(d => {
      this.addResSocOk = true;
      this.newResSoc = {
        description: '',
        typeReseauSocial: null,
        url: '',
        username: ''
      };
      this.collabInfo.reseauSocials.push(d);
    })
  }
  addTele() {
    this.teleService.addTelephone(this.newTele, this.collabInfo.id).subscribe(d => {
      this.addTeleOk = true;
      this.newTele = {
        numero: '',
        observation: '',
        type: '',
        typeTelephone: null
      };
      this.collabInfo.telephones.push(d);
    })
  }
  initAddTele() {
    if (this.isRh) {

      this.popup = 'tele';
      this.typeTeleService.allTypeTelephones().subscribe(s => {
        this.typeTeles = s;
      });
    }
  }
  initAddResSoc() {
    if (this.isRh) {

      this.popup = 'ResSoc';
      this.typeReseauSocialService.allTypeReseauSocials().subscribe(d => {
        this.typeReseauSocials = d;
      });
    }
  }
  initAddPeriodeDep() {
    if (this.isRh) {
      this.popup = 'periodeDep';
      this.typePeriodDepService.allTypePeriodeDepartements().subscribe(data => {
        this.typePeriodeDepartements = data;
      });
      this.departementService.allDepartements().subscribe(d => {
        this.departements = d;
        console.log(d);
      });
    }

  }
  initAddGroupe() {
    if (this.isRh) {

      this.popup = 'groupe';
      this.groupeService.allGroupes().subscribe(data => {
        this.groupes = data;
      })
    }
  }
  initAddRole() {
    if (this.isRoot) {
      this.isAddRole = true;
      this.popup = 'role';
      this.rolesPage = new Array();
      this.rolesPage.push('Administrateur');
      this.rolesPage.push('Collaborateur');
      this.rolesPage.push('Chef de service');
      this.rolesPage.push('Responsable RH');
    }
  }
  initAddAdress() {
    if (this.isRh) {

      this.popup = 'Adresse';
      this.typeAdrsseService.allTypeAdresses().subscribe(data => {
        this.typesAdresse = data;
      });
    }
  }
  initAddLangue() {
    if (this.isRh) {

      this.popup = 'langue';
      this.langueService.allLangues().subscribe(data => {
        this.langues = data;
      });
      this.niveauLangueService.allNiveauLangues().subscribe(data => {
        this.niveauLangues = data;
      });
    }
  }
  initAddAttest() {
    if (this.isRh) {

      this.popup = 'Attestation';
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
    }
  }
  initAddContrat() {
    if (this.isRh) {

      this.popup = 'contrat';
      this.fonctionService.allFonctions().subscribe(data => {
        this.fonctions = data;
      });
      this.motifDepartService.allMotifDeparts().subscribe(data => {
        this.motifDeparts = data;
      });
      this.motifEntreeService.allMotifEntrees().subscribe(data => {
        this.motifEntrees = data;
      });
      this.typeActiviteService.allTypeActivites().subscribe(data => {
        this.typeActivites = data;
      });
      this.typeContratService.allTypeContrats().subscribe(data => {
        this.typeContrats = data;
      });
      this.statusProfessionnelService.allStatusProfessionnels().subscribe(data => {
        this.statusProfessionnels = data;
      });
    }
  }
  initAddCoord() {
    if (this.isRh) {

      this.popup = 'CoordoneeBancaire';
      this.banqueService.allBanques().subscribe(data => {
        this.banques = data;
      });
    }
  }
  initAddDoc() {
    if (this.isRh) {

      this.popup = 'document';
      this.typeDocumentService.allTypeDocuments().subscribe(data => {
        this.typesDocument = data;
      });
    }
  }
  initAddEmail() {
    if (this.isRh) {

      this.popup = 'email';
      this.typeEmailService.allTypeEmails().subscribe(data => {
        this.typeEmails = data;
      });
    }
  }

  selectPhoto(event) {
    this.selectedPhotos = event.target.files;
  }
  selectContrat(event) {
    this.selectedContrat = event.target.files;
  }
  selectFormation(event) {
    this.selectedFormation = event.target.files;
  }

  uploadFormation(id: number) {
    if (this.isRh) {

      this.currentFileUpload = this.selectedFormation.item(0);
      console.log('okk');
      this.uploadAttesForm.pushFileToStorage(this.currentFileUpload, id.toString()).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress.percentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          console.log('File is completely uploaded!');
        }
      })

      this.selectedFormation = undefined
    }
  }
  uploadContrat(id: number) {
    if (this.isRh) {

      this.currentFileUpload = this.selectedContrat.item(0);
      console.log('okk');
      this.uploadContratService.pushFileToStorage(this.currentFileUpload, id.toString()).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress.percentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          console.log('File is completely uploaded!');
        }
      })

      this.selectedContrat = undefined
    }
  }

  uploadPhoto() {
    if (this.isRh) {

      this.progress.percentage = 0;

      this.currentFileUpload = this.selectedPhotos.item(0)
      this.uploadPhotoCollaborateurService.pushFileToStorage(this.currentFileUpload, this.collabId.toString()).subscribe(event => {
        if (event.hasOwnProperty('partialText')) {
          this.aux = event;
          console.log(this.aux.partialText);
          this.collabInfo.photo = this.aux.partialText;
        }
        if (event.type === HttpEventType.UploadProgress) {
          this.progress.percentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          console.log('File is completely uploaded!');
        }
      })

      this.selectedPhotos = undefined
    }
  }
  desactiver() {
    this.collaborateurService.switchCompteActive(this.collabId).subscribe(d => {
      console.log(d);
      this.collabInfo.compteActive = ! this.collabInfo.compteActive;
    });
  }
}
