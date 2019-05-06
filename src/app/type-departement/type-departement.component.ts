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
    description: '',
    id: null
  };
  addOk = false;
  typesDepartement: any = null;
  constructor(private typeDepartementService: TypeDepartementService, public http: HttpClient) { }

  ngOnInit() {
    this.typeDepartementService.allTypeDepartements().subscribe(resp => {
      this.typesDepartement = resp;
    })
  }
  initEdit(t) {
    this.newTypeDepartement = t;
  }
  initAdd() {
    this.newTypeDepartement = {
      nom: '',
      description: '',
      id: null
    };
  }
  addTypeDepartement() {
    console.log(this.newTypeDepartement);
    if (this.newTypeDepartement.nom !== '' && this.newTypeDepartement.description !== '') {
      this.typeDepartementService.addTypeDepartement(this.newTypeDepartement).subscribe(resp => {
        if (this.newTypeDepartement.id === null) {
          this.typesDepartement.push(resp);
          this.addOk = true;
        } else {
          this.addOk = true;
          this.ngOnInit();
        }
        console.log(resp);
        this.newTypeDepartement.description = '';
        this.newTypeDepartement.nom = '';
        this.newTypeDepartement.id = null;
      })
    }
  }
}
