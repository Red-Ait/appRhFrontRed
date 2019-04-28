import { Component, OnInit } from '@angular/core';
import {TypeAdresseService} from "../../service/TypeAdresseService";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-type-adresse',
  templateUrl: './type-adresse.component.html',
  styleUrls: ['./type-adresse.component.css']
})
export class TypeAdresseComponent implements OnInit {

  newTypeAdresse = {
    nom: '',
    description: ''
  };
  addOk = false;
  typesAdresse: any = null;
  constructor(private typeAdresseService: TypeAdresseService, public http: HttpClient) { }

  ngOnInit() {
    this.typeAdresseService.allTypeAdresses().subscribe(resp => {
      this.typesAdresse = resp;
    })
  }
  addTypeAdresse() {
    console.log(this.newTypeAdresse);
    if (this.newTypeAdresse.nom !== '' && this.newTypeAdresse.description !== '') {
      this.typeAdresseService.addTypeAdresse(this.newTypeAdresse).subscribe(resp => {
        this.typesAdresse.push(resp);
        this.addOk = true;
        console.log(resp);
        this.newTypeAdresse.description = '';
        this.newTypeAdresse.nom = '';
      })
    }
  }
}
