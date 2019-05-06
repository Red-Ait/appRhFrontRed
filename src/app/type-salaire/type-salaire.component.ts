import { Component, OnInit } from '@angular/core';
import {TypeSalaireService} from "../../service/TypeSalaireService";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-type-salaire',
  templateUrl: './type-salaire.component.html',
  styleUrls: ['./type-salaire.component.css']
})
export class TypeSalaireComponent implements OnInit {

  newTypeSalaire = {
    nom: '',
    description: '',
    id: null
  };
  addOk = false;
  typesSalaire: any = null;
  constructor(private typeSalaireService: TypeSalaireService, public http: HttpClient) { }

  ngOnInit() {
    this.typeSalaireService.allTypeSalaires().subscribe(resp => {
      this.typesSalaire = resp;
    })
  }
  initEdit(t) {
    this.newTypeSalaire = t;
  }
  initAdd() {
    this.newTypeSalaire = {
      nom: '',
      description: '',
      id: null
    };
  }
  addTypeSalaire() {
    console.log(this.newTypeSalaire);
    if (this.newTypeSalaire.nom !== '' && this.newTypeSalaire.description !== '') {
      this.typeSalaireService.addTypeSalaire(this.newTypeSalaire).subscribe(resp => {
        if (this.newTypeSalaire.id === null) {
          this.typesSalaire.push(resp);
          this.addOk = true;
        } else {
          this.addOk = true;
          this.ngOnInit();
        }
        console.log(resp);
        this.newTypeSalaire.description = '';
        this.newTypeSalaire.nom = '';
        this.newTypeSalaire.id = null;
      })
    }
  }
}
