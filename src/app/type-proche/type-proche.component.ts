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
    url: '',
    description: '',
    username: ''
  };
  addOk = false;
  typesProche: any = null;
  constructor(private typeProcheService: TypeProcheService, public http: HttpClient) { }

  ngOnInit() {
    this.typeProcheService.allTypeProches().subscribe(resp => {
      this.typesProche = resp;
    })
  }
  addTypeProche() {
    console.log(this.newTypeProche);
    if (this.newTypeProche.url !== '' && this.newTypeProche.username !== '' && this.newTypeProche.description !== '') {
      this.typeProcheService.addTypeProche(this.newTypeProche).subscribe(resp => {
        this.typesProche.push(resp);
        this.addOk = true;
        console.log(resp);
        this.newTypeProche.description = '';
        this.newTypeProche.url = '';
        this.newTypeProche.username = '';
      })
    }
  }
}
