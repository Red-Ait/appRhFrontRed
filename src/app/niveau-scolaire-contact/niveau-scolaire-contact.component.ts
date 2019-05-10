import { Component, OnInit } from '@angular/core';
import {NiveauScolaireContactService} from "../../service/NiveauScolaireContactService";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-niveau-scolaire-contact',
  templateUrl: './niveau-scolaire-contact.component.html',
  styleUrls: ['./niveau-scolaire-contact.component.css']
})
export class NiveauScolaireContactComponent implements OnInit {

  newNiveauScolaireContact = {
    nom: '',
    description: '',
    id: null
  };
  addOk = false;
  niveauScolaireContact: any = null;
  constructor(private niveauScolaireContactService: NiveauScolaireContactService, public http: HttpClient) { }

  ngOnInit() {
    this.niveauScolaireContactService.allNiveauScolaireContacts().subscribe(resp => {
      this.niveauScolaireContact = resp;

    })
  }
  initEdit(t) {
    this.newNiveauScolaireContact = t;
  }
  initAdd() {
    this.newNiveauScolaireContact = {
      nom: '',
      description: '',
      id: null
    };
  }
  addNiveauScolaireContact() {
    console.log(this.newNiveauScolaireContact);
    if (this.newNiveauScolaireContact.nom !== '' && this.newNiveauScolaireContact.description !== '') {
      this.niveauScolaireContactService.addNiveauScolaireContact(this.newNiveauScolaireContact).subscribe(resp => {
        if (this.newNiveauScolaireContact.id === null) {
          this.niveauScolaireContact.push(resp);
          this.addOk = true;
        } else {
          this.addOk = true;
          this.ngOnInit();
        }
        console.log(resp);
        this.newNiveauScolaireContact.id = null;
        this.newNiveauScolaireContact.description = '';
        this.newNiveauScolaireContact.nom = '';
      })
    }
  }
}
