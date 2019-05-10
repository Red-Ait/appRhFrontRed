import { Component, OnInit } from '@angular/core';
import {LocalStorage} from "@ngx-pwa/local-storage";
import {CollaborateurService} from "../../service/CollaborateurService";
import {CategorieService} from "../../service/CategorieService";
import {NiveauScolaireContactService} from "../../service/NiveauScolaireContactService";

@Component({
  selector: 'app-add-collaborateur',
  templateUrl: './add-collaborateur.component.html',
  styleUrls: ['./add-collaborateur.component.css']
})
export class AddCollaborateurComponent implements OnInit {

  addCollabOk = {
    nom : true,
    prenom : true,
    sexe : true,
    civilite : true,
    dateNaissance : true,
    cin : true,
    situationFamiliale : true,
    matricule : true,
    numCNSS : true,
    numCIMR : true,
    numMutuelle : true,
    permisConduire : true,
    compteActive : true,
    niveauScolaire1: true,
    categorie : true,
    motDePass : true
  };
  showMdp = false;
  newCollab = {
    nom : '',
    prenom : '',
    sexe : '',
    civilite : '',
    dateNaissance : null,
    cin : '',
    situationFamiliale : '',
    matricule : '',
    numCNSS : '',
    numCIMR : '',
    numMutuelle : '',
    permisConduire : '',
    compteActive : '',
    motDePass : '',
    niveauScolaire1: null,
    categorie : null
  };
  step = 1;
  newId = null;
  categories = null;
  niveauScolaires = null;
  constructor(
    public localStorage: LocalStorage,
    private categorieService : CategorieService,
    private nivSeervice : NiveauScolaireContactService,
    private collabService: CollaborateurService) { }

  ngOnInit() {
    this.nivSeervice.allNiveauScolaireContacts().subscribe(data => {
      this.niveauScolaires = data;
    });
    this.categorieService.allCategories().subscribe(dat => {
      this.categories = dat;
    });
    this.localStorage.getItem('step').subscribe(s => {
      this.step = +s;
      if (s === null) {
        this.step = 1;
      }
      console.log(s);
    });
    this.localStorage.getItem('newCollab').subscribe(s => {

      if (s === null) {
        this.newCollab = {
          nom : '',
          prenom : '',
          sexe : '',
          civilite : '',
          dateNaissance : null,
          cin : '',
          situationFamiliale : '',
          matricule : '',
          numCNSS : '',
          numCIMR : '',
          numMutuelle : '',
          permisConduire : '',
          compteActive : '',
          motDePass : '',
          niveauScolaire1: null,
          categorie : null
        };
      } else {
        this.newCollab = JSON.parse(s);
      }
      console.log(this.newCollab);
    });


  }
  addCollab1() {
    switch (this.step ) {
      case 1:
      let b = true;
      if (!this.newCollab.nom.toLowerCase().match(/^[a-z -]{2,}$/)) {
        this.addCollabOk.nom = false;
        b = false;
      } else {
        this.addCollabOk.nom =true;
      }
      if (!this.newCollab.prenom.toLowerCase().match(/^[a-z -]{2,}$/)) {
        this.addCollabOk.prenom = false;
        b = false;
      } else {
        this.addCollabOk.prenom =true;
      }
      if (!this.newCollab.cin.toLowerCase().match(/^[a-z]{2}[0-9]{5,6}$/)) {
        this.addCollabOk.cin = false;
        b = false;
      } else {
        this.addCollabOk.cin =true;
      }
      if(this.newCollab.dateNaissance === null) {
        b = false;
        this.addCollabOk.dateNaissance = false;
      } else {
        this.addCollabOk.dateNaissance = true;
      }
      if(this.newCollab.civilite ==='' ) {
        b = false;
        this.addCollabOk.civilite = false;
      } else {
        this.addCollabOk.civilite = true;
      }
      if(this.newCollab.sexe ==='' ) {
        b = false;
        this.addCollabOk.sexe = false;
      } else {
        this.addCollabOk.sexe = true;
      }
      if(this.newCollab.situationFamiliale ==='' ) {
        b = false;
        this.addCollabOk.situationFamiliale = false;
      } else {
        this.addCollabOk.situationFamiliale = true;
      }

      if (b) {
        this.localStorage.setItem('newCollab', JSON.stringify(this.newCollab)).subscribe();
        this.localStorage.setItem('step', '2').subscribe();
        this.step = 2;
      }
      break;
      case 2:
        let c = true;
        if (!this.newCollab.matricule.toLowerCase().match(/^[a-z1-9]{2,}$/)) {
          this.addCollabOk.matricule = false;
          c = false;
        } else {
          this.addCollabOk.matricule =true;
        }
        if (!this.newCollab.numCNSS.toLowerCase().match(/^[1-9]{2,}$/)) {
          this.addCollabOk.numCNSS = false;
          c = false;
        } else {
          this.addCollabOk.numCNSS =true;
        }
        if (!this.newCollab.numCIMR.toLowerCase().match(/^[1-9]{2,}$/)) {
          this.addCollabOk.numCIMR = false;
          c = false;
        } else {
          this.addCollabOk.numCIMR =true;
        }
        if (!this.newCollab.numMutuelle.toLowerCase().match(/^[1-9]{2,}$/)) {
          this.addCollabOk.numMutuelle = false;
          c = false;
        } else {
          this.addCollabOk.numMutuelle =true;
        }
        if (this.newCollab.motDePass.length < 8) {
          this.addCollabOk.motDePass = false;
          c = false;
        } else {
          this.addCollabOk.motDePass =true;
        }
        if (this.newCollab.permisConduire === '') {
          this.addCollabOk.permisConduire = false;
          c = false;
        } else {
          this.addCollabOk.permisConduire =true;
        }
        if (this.newCollab.categorie === null) {
          this.addCollabOk.categorie = false;
          c = false;
        } else {
          this.addCollabOk.categorie = true;
        }
        if (this.newCollab.niveauScolaire1 === null) {
          this.addCollabOk.niveauScolaire1 = false;
          c = false;
        } else {
          this.addCollabOk.niveauScolaire1 = true;
        }
        if (c) {
          this.localStorage.setItem('newCollab', JSON.stringify(this.newCollab)).subscribe();
          this.localStorage.setItem('step', '3').subscribe();
          this.step = 3;
        }
        console.log(this.newCollab.permisConduire);
        break;
      case 3 :
        console.log('oo');
        this.collabService.addCollaborateur(this.newCollab).subscribe(c => {
          this.step = 4;
          this.newId = c;
          this.localStorage.removeItem('step').subscribe();
          this.localStorage.removeItem('newCollab').subscribe();
          this.newCollab = {
            nom : '',
            prenom : '',
            sexe : '',
            civilite : '',
            dateNaissance : null,
            cin : '',
            situationFamiliale : '',
            matricule : '',
            numCNSS : '',
            numCIMR : '',
            numMutuelle : '',
            permisConduire : '',
            compteActive : '',
            motDePass : '',
            niveauScolaire1: null,
            categorie : null

          };
        });
        break;
    }
}
}
