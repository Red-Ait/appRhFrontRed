import { Component, OnInit } from '@angular/core';
import {TypeTelephoneService} from "../../service/TypeTelephoneService";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-type-telephone',
  templateUrl: './type-telephone.component.html',
  styleUrls: ['./type-telephone.component.css']
})
export class TypeTelephoneComponent implements OnInit {

  newTypeTelephone = {
    nom: '',
    description: ''
  };
  addOk = false;
  typesTelephone: any = null;
  constructor(private typeTelephoneService: TypeTelephoneService, public http: HttpClient) { }

  ngOnInit() {
    this.typeTelephoneService.allTypeTelephones().subscribe(resp => {
      this.typesTelephone = resp;
    })
  }
  addTypeTelephone() {
    console.log(this.newTypeTelephone);
    if (this.newTypeTelephone.nom !== '' && this.newTypeTelephone.description !== '') {
      this.typeTelephoneService.addTypeTelephone(this.newTypeTelephone).subscribe(resp => {
        this.typesTelephone.push(resp);
        this.addOk = true;
        console.log(resp);
        this.newTypeTelephone.description = '';
        this.newTypeTelephone.nom = '';
      })
    }
  }
}
