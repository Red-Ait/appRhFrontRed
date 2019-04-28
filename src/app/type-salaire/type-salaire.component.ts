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
    description: ''
  };
  addOk = false;
  typesSalaire: any = null;
  constructor(private typeSalaireService: TypeSalaireService, public http: HttpClient) { }

  ngOnInit() {
    this.typeSalaireService.allTypeSalaires().subscribe(resp => {
      this.typesSalaire = resp;
    })
  }
  addTypeSalaire() {
    console.log(this.newTypeSalaire);
    if (this.newTypeSalaire.nom !== '' && this.newTypeSalaire.description !== '') {
      this.typeSalaireService.addTypeSalaire(this.newTypeSalaire).subscribe(resp => {
        this.typesSalaire.push(resp);
        this.addOk = true;
        console.log(resp);
        this.newTypeSalaire.description = '';
        this.newTypeSalaire.nom = '';
      })
    }
  }
}
