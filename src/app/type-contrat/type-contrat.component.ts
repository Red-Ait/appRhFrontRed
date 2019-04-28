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
    description: ''
  };
  addOk = false;
  typesContrat: any = null;
  constructor(private typeContratService: TypeContratService, public http: HttpClient) { }

  ngOnInit() {
    this.typeContratService.allTypeContrats().subscribe(resp => {
      this.typesContrat = resp;
    })
  }
  addTypeContrat() {
    console.log(this.newTypeContrat);
    if (this.newTypeContrat.nom !== '' && this.newTypeContrat.description !== '') {
      this.typeContratService.addTypeContrat(this.newTypeContrat).subscribe(resp => {
        this.typesContrat.push(resp);
        this.addOk = true;
        console.log(resp);
        this.newTypeContrat.description = '';
        this.newTypeContrat.nom = '';
      })
    }
  }
}
