import { Component, OnInit } from '@angular/core';
import {DelivreParService} from "../../service/DelivreParService";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-delivre-par',
  templateUrl: './delivre-par.component.html',
  styleUrls: ['./delivre-par.component.css']
})
export class DelivreParComponent implements OnInit {

  newDelivrePar = {
    nom: '',
    description: '',
    id: null
  };
  addOk = false;
  delivrePar: any = null;
  constructor(private delivreParService: DelivreParService, public http: HttpClient) { }

  ngOnInit() {
    this.delivreParService.allDelivrePars().subscribe(resp => {
      this.delivrePar = resp;

    })
  }
  initEdit(t) {
    this.newDelivrePar = t;
  }
  initAdd() {
    this.newDelivrePar = {
      nom: '',
      description: '',
      id: null
    };
  }
  addDelivrePar() {
    console.log(this.newDelivrePar);
    if (this.newDelivrePar.nom !== '' && this.newDelivrePar.description !== '') {
      this.delivreParService.addDelivrePar(this.newDelivrePar).subscribe(resp => {
        if (this.newDelivrePar.id === null) {
          this.delivrePar.push(resp);
          this.addOk = true;
        } else {
          this.addOk = true;
          this.ngOnInit();
        }
        console.log(resp);
        this.newDelivrePar.id = null;
        this.newDelivrePar.description = '';
        this.newDelivrePar.nom = '';
      })
    }
  }
}
