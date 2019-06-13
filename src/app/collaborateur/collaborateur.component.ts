import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CollaborateurService} from "../../service/CollaborateurService";
import {LocalStorage} from "@ngx-pwa/local-storage";
import {TokenStorageService} from "../../service/TokenStorageService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-collaborateur',
  templateUrl: './collaborateur.component.html',
  styleUrls: ['./collaborateur.component.css']
})
export class CollaborateurComponent implements OnInit {

  colon = {
    id: true,
    nom: true,
    prenom: true,
    categorie: true,
    cin: true,
    civilite: true,
    compteActive: true,
    dateNaissance: true,
    matricule: true,
    motDePass: true,
    niveauScolaire1: true,
    numCIMR: true,
    numCNSS: true,
    numMutuelle: true,
    permisConduire: true,
    photo: true,
    sexe: true,
    situationFamiliale: true
  };
  searchInput = '';
  nbCollaborateur = 10 ;
  nbCollaborateurTotal = 0 ;
  page = 0;
  nbPageTotal = 0;
  collaborateur: any = null;
  isRh = false;
  isRoot = false;
  constructor(private collaborateurService: CollaborateurService,
              public http: HttpClient,
              private tokenStorageService: TokenStorageService,
              private router: Router,
              public localStorage: LocalStorage) { }

  ngOnInit() {
    this.tokenStorageService.getAuthorities().forEach(role => {
      if (role === 'ROLE_RH') {
        this.isRh = true;
      }
      if (role === 'ROLE_ROOT') {
        this.isRoot = true;
      }
    });

    if(! (this.isRh || this.isRoot)) {
      this.router.navigate(['/profil']);
    }

    this.search();

    this.localStorage.getItem('colone').subscribe(r => {
      if (r !== null) {
        this.colon = JSON.parse(r);
      }
    })
  }
  search() {
    console.log(this.searchInput);
    this.page = 0;
    this.collaborateurService.search(this.searchInput, this.page, this.nbCollaborateur).subscribe(resp => {
      console.log(resp);
      this.collaborateur = resp;
      let i = 0;
      this.collaborateur.forEach(c => {
        c.class = i;
        i++;
      });
      console.log(this.searchInput);
      this.collaborateurService.countCollaborateur(this.searchInput).subscribe(c => {
        this.nbCollaborateurTotal = + c;
        this.nbPageTotal = Math.trunc( this.nbCollaborateurTotal / this.nbCollaborateur);
        if (this.nbCollaborateurTotal % this.nbCollaborateur !== 0) {
          this.nbPageTotal ++;
        }
      });

    });
  }
  move(i: number) {
    if (i === 1) {
      this.page --;
    } else {
      this.page ++  ;
    }
    this.collaborateurService.search(this.searchInput, this.page, this.nbCollaborateur).subscribe(resp => {
      console.log(resp);
      this.collaborateur = resp;
      let i = 0;
      this.collaborateur.forEach(c => {
        c.class = i;
        i++;
      });
    });
  }
  changeNbC() {
    this.page = 0;
    this.search();
  }
  choseColon(c: string) {
    switch (c) {
      case 'id':
        (this.colon.id) ? this.colon.id = false: this.colon.id = true;
        break;
      case 'nom':
        (this.colon.nom) ? this.colon.nom = false: this.colon.nom = true;
        break;
      case 'prenom':
        (this.colon.prenom) ? this.colon.prenom = false: this.colon.prenom = true;
        break;
      case 'categorie':
        (this.colon.categorie) ? this.colon.categorie = false: this.colon.categorie = true;
        break;
      case 'cin':
        (this.colon.cin) ? this.colon.cin =  false: this.colon.cin = true;
        break;
      case 'civilite':
        (this.colon.civilite) ? this.colon.civilite = false: this.colon.civilite = true;
        break;
      case 'compteActive':
        (this.colon.compteActive) ? this.colon.compteActive = false: this.colon.compteActive = true;
        break;
      case 'dateNaissance':
        (this.colon.dateNaissance) ? this.colon.dateNaissance = false: this.colon.dateNaissance = true;
        break;
      case 'niveauScolaire1':
        (this.colon.niveauScolaire1) ? this.colon.niveauScolaire1 = false: this.colon.niveauScolaire1 = true;
        break;
      case 'numCIMR':
        (this.colon.numCIMR) ? this.colon.numCIMR = false: this.colon.numCIMR = true;
        break;
      case 'numCNSS':
        (this.colon.numCNSS) ? this.colon.numCNSS = false: this.colon.numCNSS = true;
        break;
      case 'numMutuelle':
        (this.colon.numMutuelle) ? this.colon.numMutuelle = false: this.colon.numMutuelle = true;
        break;
      case  'matricule':
        (this.colon.matricule) ? this.colon.matricule = false: this.colon.matricule = true;
        break;
      case 'permisConduire':
        (this.colon.permisConduire) ? this.colon.permisConduire = false: this.colon.permisConduire = true;
        break;
      case 'sexe':
        (this.colon.sexe) ? this.colon.sexe = false: this.colon.sexe = true;
        break;
      case 'situationFamiliale':
        (this.colon.situationFamiliale) ? this.colon.situationFamiliale = false: this.colon.situationFamiliale = true;
        break;


    }
    this.localStorage.setItem('colone', JSON.stringify(this.colon)).subscribe();

  }
}
