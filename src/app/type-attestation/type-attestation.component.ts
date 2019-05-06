import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TypeAttestationService} from "../../service/TypeAttestationService";

@Component({
  selector: 'app-type-attestation',
  templateUrl: './type-attestation.component.html',
  styleUrls: ['./type-attestation.component.css']
})
export class TypeAttestationComponent implements OnInit {

  newTypeAttestation = {
    nom: '',
    description: '',
    id: null
  };
  addOk = false;
  typesAttestation: any = null;
  constructor(private typeAttestationService: TypeAttestationService, public http: HttpClient) { }

  ngOnInit() {
    this.typeAttestationService.allTypeAttestations().subscribe(resp => {
      this.typesAttestation = resp;
    })
  }
  initEdit(t) {
    this.newTypeAttestation = t;
  }
  initAdd() {
    this.newTypeAttestation = {
      nom: '',
      description: '',
      id: null
    };
  }
  addTypeAttestation() {
    console.log(this.newTypeAttestation);
    if (this.newTypeAttestation.nom !== '' && this.newTypeAttestation.description !== '') {
      this.typeAttestationService.addTypeAttestation(this.newTypeAttestation).subscribe(resp => {
        if (this.newTypeAttestation.id === null) {
          this.typesAttestation.push(resp);
          this.addOk = true;
        } else {
          this.addOk = true;
          this.ngOnInit();
        }
        console.log(resp);
        this.newTypeAttestation.description = '';
        this.newTypeAttestation.nom = '';
        this.newTypeAttestation.id = null;
      })
    }
  }
}
