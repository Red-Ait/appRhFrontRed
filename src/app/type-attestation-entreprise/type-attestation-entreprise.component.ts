import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TypeAttestationEntrepriseService} from "../../service/TypeAttestationEntrepriseService";

@Component({
  selector: 'app-type-attestation-entreprise',
  templateUrl: './type-attestation-entreprise.component.html',
  styleUrls: ['./type-attestation-entreprise.component.css']
})
export class TypeAttestationEntrepriseComponent implements OnInit {

  newTypeAttestationEntreprise = {
    nom: '',
    description: '',
    id: null
  };
  addOk = false;
  typesAttestationEntreprise: any = null;
  constructor(private typeAttestationEntrepriseService: TypeAttestationEntrepriseService, public http: HttpClient) { }

  ngOnInit() {
    this.typeAttestationEntrepriseService.allTypeAttestationEntreprises().subscribe(resp => {
      this.typesAttestationEntreprise = resp;
    })
  }
  initEdit(t) {
    this.newTypeAttestationEntreprise = t;
  }
  initAdd() {
    this.newTypeAttestationEntreprise = {
      nom: '',
      description: '',
      id: null
    };
  }
  addTypeAttestationEntreprise() {
    console.log(this.newTypeAttestationEntreprise);
    if (this.newTypeAttestationEntreprise.nom !== '' && this.newTypeAttestationEntreprise.description !== '') {
      this.typeAttestationEntrepriseService.addTypeAttestationEntreprise(this.newTypeAttestationEntreprise).subscribe(resp => {
        if (this.newTypeAttestationEntreprise.id === null) {
          this.typesAttestationEntreprise.push(resp);
          this.addOk = true;
        } else {
          this.addOk = true;
          this.ngOnInit();
        }
        console.log(resp);
        this.newTypeAttestationEntreprise.id = null;
        this.newTypeAttestationEntreprise.description = '';
        this.newTypeAttestationEntreprise.nom = '';
      })
    }
  }
}
