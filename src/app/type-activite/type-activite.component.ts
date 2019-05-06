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
    description: '',
    id: null
  };
  addOk = false;
  typesActivite: any = null;
  constructor(private typeActiviteService: TypeActiviteService, public http: HttpClient) { }

  ngOnInit() {
    this.typeActiviteService.allTypeActivites().subscribe(resp => {
      this.typesActivite = resp;
    })
  }
  initEdit(t) {
    this.newTypeAcitivite = t;
  }
  initAdd() {
    this.newTypeAcitivite = {
      nom: '',
      description: '',
      id: null
    };
  }
  addTypeActivite() {
    console.log(this.newTypeAcitivite);
    if (this.newTypeAcitivite.nom !== '' && this.newTypeAcitivite.description !== '') {
      this.typeActiviteService.addTypeActivite(this.newTypeAcitivite).subscribe(resp => {
        if (this.newTypeAcitivite.id === null) {
          this.typesActivite.push(resp);
          this.addOk = true;
        } else {
          this.addOk = true;
          this.ngOnInit();
        }
        console.log(resp);
        this.newTypeAcitivite.id = null;
        this.newTypeAcitivite.description = '';
        this.newTypeAcitivite.nom = '';
      })
    }
  }
}
