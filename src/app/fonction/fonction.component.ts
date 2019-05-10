import { Component, OnInit } from '@angular/core';
import {FonctionService} from "../../service/FonctionService";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-fonction',
  templateUrl: './fonction.component.html',
  styleUrls: ['./fonction.component.css']
})
export class FonctionComponent implements OnInit {

  newFonction = {
    nom: '',
    description: '',
    id: null
  };
  addOk = false;
  fonction: any = null;
  constructor(private fonctionService: FonctionService, public http: HttpClient) { }

  ngOnInit() {
    this.fonctionService.allFonctions().subscribe(resp => {
      this.fonction = resp;

    })
  }
  initEdit(t) {
    this.newFonction = t;
  }
  initAdd() {
    this.newFonction = {
      nom: '',
      description: '',
      id: null
    };
  }
  addFonction() {
    console.log(this.newFonction);
    if (this.newFonction.nom !== '' && this.newFonction.description !== '') {
      this.fonctionService.addFonction(this.newFonction).subscribe(resp => {
        if (this.newFonction.id === null) {
          this.fonction.push(resp);
          this.addOk = true;
        } else {
          this.addOk = true;
          this.ngOnInit();
        }
        console.log(resp);
        this.newFonction.id = null;
        this.newFonction.description = '';
        this.newFonction.nom = '';
      })
    }
  }
}
