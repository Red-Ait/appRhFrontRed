import { Component, OnInit } from '@angular/core';
import {TypeProcheService} from "../../service/TypeProcheService";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-type-proche',
  templateUrl: './type-proche.component.html',
  styleUrls: ['./type-proche.component.css']
})
export class TypeProcheComponent implements OnInit {

  newTypeProche = {
    nom: '',
    description: '',
    id: null
  };
  addOk = false;
  typesProche: any = null;
  constructor(private typeProcheService: TypeProcheService, public http: HttpClient) { }

  ngOnInit() {
    this.typeProcheService.allTypeProches().subscribe(resp => {
      this.typesProche = resp;
    })
  }
  initEdit(t) {
    this.newTypeProche = t;
  }
  initAdd() {
    this.newTypeProche = {
      nom: '',
      description: '',
      id: null
    };
  }
  addTypeProche() {
    console.log(this.newTypeProche);
    if (this.newTypeProche.nom !== '' && this.newTypeProche.description !== '') {
      this.typeProcheService.addTypeProche(this.newTypeProche).subscribe(resp => {
        if (this.newTypeProche.id === null) {
          this.typesProche.push(resp);
          this.addOk = true;
        } else {
          this.addOk = true;
          this.ngOnInit();
        }
        console.log(resp);
        this.newTypeProche.description = '';
        this.newTypeProche.nom = '';
        this.newTypeProche.id = null;
      })
    }
  }
}
