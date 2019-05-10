import { Component, OnInit } from '@angular/core';
import {BanqueService} from "../../service/BanqueService";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-banque',
  templateUrl: './banque.component.html',
  styleUrls: ['./banque.component.css']
})
export class BanqueComponent implements OnInit {

  newBanque = {
    nom: '',
    id: null
  };
  addOk = false;
  banque: any = null;
  constructor(private banqueService: BanqueService, public http: HttpClient) { }

  ngOnInit() {
    this.banqueService.allBanques().subscribe(resp => {
      this.banque = resp;

    })
  }
  initEdit(t) {
    this.newBanque = t;
  }
  initAdd() {
    this.newBanque = {
      nom: '',
      id: null
    };
  }
  addBanque() {
    console.log(this.newBanque);
    if (this.newBanque.nom !== '' ) {
      this.banqueService.addBanque(this.newBanque).subscribe(resp => {
        if (this.newBanque.id === null) {
          this.banque.push(resp);
          this.addOk = true;
        } else {
          this.addOk = true;
          this.ngOnInit();
        }
        console.log(resp);
        this.newBanque.id = null;
        this.newBanque.nom = '';
      })
    }
  }
}
