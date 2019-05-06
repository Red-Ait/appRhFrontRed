import { Component, OnInit } from '@angular/core';
import {TypeContratService} from "../../service/TypeContratService";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-type-contrat',
  templateUrl: './type-contrat.component.html',
  styleUrls: ['./type-contrat.component.css']
})
export class TypeContratComponent implements OnInit {

  newTypeContrat = {
    nom: '',
    description: '',
    id: null
  };
  addOk = false;
  typesContrat: any = null;
  constructor(private typeContratService: TypeContratService, public http: HttpClient) { }

  ngOnInit() {
    this.typeContratService.allTypeContrats().subscribe(resp => {
      this.typesContrat = resp;
    })
  }
  initEdit(t) {
    this.newTypeContrat = t;
  }
  initAdd() {
    this.newTypeContrat = {
      nom: '',
      description: '',
      id: null
    };
  }
  addTypeContrat() {
    console.log(this.newTypeContrat);
    if (this.newTypeContrat.nom !== '' && this.newTypeContrat.description !== '') {
      this.typeContratService.addTypeContrat(this.newTypeContrat).subscribe(resp => {
        if (this.newTypeContrat.id === null) {
          this.typesContrat.push(resp);
          this.addOk = true;
        } else {
          this.addOk = true;
          this.ngOnInit();
        }
        console.log(resp);
        this.newTypeContrat.id = null;
        this.newTypeContrat.description = '';
        this.newTypeContrat.nom = '';
      })
    }
  }
}
