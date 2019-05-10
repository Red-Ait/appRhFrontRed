import { Component, OnInit } from '@angular/core';
import {VilleService} from "../../service/VilleService";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css']
})
export class VilleComponent implements OnInit {

  newVille = {
    nom: '',
    description: '',
    id: null
  };
  addOk = false;
  ville: any = null;
  constructor(private villeService: VilleService, public http: HttpClient) { }

  ngOnInit() {
    this.villeService.allVilles().subscribe(resp => {
      this.ville = resp;

    })
  }
  initEdit(t) {
    this.newVille = t;
  }
  initAdd() {
    this.newVille = {
      nom: '',
      description: '',
      id: null
    };
  }
  addVille() {
    console.log(this.newVille);
    if (this.newVille.nom !== '' && this.newVille.description !== '') {
      this.villeService.addVille(this.newVille).subscribe(resp => {
        if (this.newVille.id === null) {
          this.ville.push(resp);
          this.addOk = true;
        } else {
          this.addOk = true;
          this.ngOnInit();
        }
        console.log(resp);
        this.newVille.id = null;
        this.newVille.description = '';
        this.newVille.nom = '';
      })
    }
  }
}
