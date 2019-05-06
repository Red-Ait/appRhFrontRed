import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { TypePeriodeDepartementService} from "../../service/TypePeriodeDepartementService";

@Component({
  selector: 'app-type-periode-departement',
  templateUrl: './type-periode-departement.component.html',
  styleUrls: ['./type-periode-departement.component.css']
})
export class TypePeriodeDepartementComponent implements OnInit {

  newTypePerDep = {
    nom: '',
    description: '',
    id: null
  };
  addOk = false;
  typesPerDep: any = null;
  constructor(private typePerDepService: TypePeriodeDepartementService, public http: HttpClient) { }

  ngOnInit() {
    this.typePerDepService.allTypePeriodeDepartements().subscribe(resp => {
      this.typesPerDep = resp;
    })
  }
  initEdit(t) {
    this.newTypePerDep = t;
  }
  initAdd() {
    this.newTypePerDep = {
      nom: '',
      description: '',
      id: null
    };
  }
  addTypePerDep() {
    console.log(this.newTypePerDep);
    if (this.newTypePerDep.nom !== '' && this.newTypePerDep.description !== '') {
      this.typePerDepService.addTypePeriodeDepartement(this.newTypePerDep).subscribe(resp => {
        if (this.newTypePerDep.id === null) {
          this.typesPerDep.push(resp);
          this.addOk = true;
        } else {
          this.addOk = true;
          this.ngOnInit();
        }
        console.log(resp);
        this.newTypePerDep.description = '';
        this.newTypePerDep.nom = '';
        this.newTypePerDep.id = null;
      });
    }
  }
}
