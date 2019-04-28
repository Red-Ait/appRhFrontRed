import { Component, OnInit } from '@angular/core';
import {TypeDepartementService} from "../../service/TypeDepartementService";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-type-departement',
  templateUrl: './type-departement.component.html',
  styleUrls: ['./type-departement.component.css']
})
export class TypeDepartementComponent implements OnInit {

  newTypeDepartement = {
    nom: '',
    description: ''
  };
  addOk = false;
  typesDepartement: any = null;
  constructor(private typeDepartementService: TypeDepartementService, public http: HttpClient) { }

  ngOnInit() {
    this.typeDepartementService.allTypeDepartements().subscribe(resp => {
      this.typesDepartement = resp;
    })
  }
  addTypeDepartement() {
    console.log(this.newTypeDepartement);
    if (this.newTypeDepartement.nom !== '' && this.newTypeDepartement.description !== '') {
      this.typeDepartementService.addTypeDepartement(this.newTypeDepartement).subscribe(resp => {
        this.typesDepartement.push(resp);
        this.addOk = true;
        console.log(resp);
        this.newTypeDepartement.description = '';
        this.newTypeDepartement.nom = '';
      })
    }
  }
}
