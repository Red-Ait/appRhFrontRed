import { Component, OnInit } from '@angular/core';
import {TypeActiviteService} from "../../service/TypeActiviteService";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-type-activite',
  templateUrl: './type-activite.component.html',
  styleUrls: ['./type-activite.component.css']
})
export class TypeActiviteComponent implements OnInit {

  newTypeAcitivite = {
    nom: '',
    description: ''
  };
  addOk = false;
  typesActivite: any = null;
  constructor(private typeActiviteService: TypeActiviteService, public http: HttpClient) { }

  ngOnInit() {
    this.typeActiviteService.allTypeActivites().subscribe(resp => {
      this.typesActivite = resp;
    })
  }
  addTypeActivite() {
    console.log(this.newTypeAcitivite);
    if (this.newTypeAcitivite.nom !== '' && this.newTypeAcitivite.description !== '') {
      this.typeActiviteService.addTypeActivite(this.newTypeAcitivite).subscribe(resp => {
        this.typesActivite.push(resp);
        this.addOk = true;
        console.log(resp);
        this.newTypeAcitivite.description = '';
        this.newTypeAcitivite.nom = '';
      })
    }
  }
}
