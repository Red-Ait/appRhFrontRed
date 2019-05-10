import { Component, OnInit } from '@angular/core';
import {NiveauLangueService} from "../../service/NiveauLangueService";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-niveau-langue',
  templateUrl: './niveau-langue.component.html',
  styleUrls: ['./niveau-langue.component.css']
})
export class NiveauLangueComponent implements OnInit {

  newNiveauLangue = {
    titre: '',
    description: '',
    id: null
  };
  addOk = false;
  niveauLangue: any = null;
  constructor(private niveauLangueService: NiveauLangueService, public http: HttpClient) { }

  ngOnInit() {
    this.niveauLangueService.allNiveauLangues().subscribe(resp => {
      this.niveauLangue = resp;

    })
  }
  initEdit(t) {
    this.newNiveauLangue = t;
  }
  initAdd() {
    this.newNiveauLangue = {
      titre: '',
      description: '',
      id: null
    };
  }
  addNiveauLangue() {
    console.log(this.newNiveauLangue);
    if (this.newNiveauLangue.titre !== '' && this.newNiveauLangue.description !== '') {
      this.niveauLangueService.addNiveauLangue(this.newNiveauLangue).subscribe(resp => {
        if (this.newNiveauLangue.id === null) {
          this.niveauLangue.push(resp);
          this.addOk = true;
        } else {
          this.addOk = true;
          this.ngOnInit();
        }
        console.log(resp);
        this.newNiveauLangue.id = null;
        this.newNiveauLangue.description = '';
        this.newNiveauLangue.titre = '';
      })
    }
  }
}
