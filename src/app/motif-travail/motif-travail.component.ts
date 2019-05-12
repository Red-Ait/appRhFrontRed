import { Component, OnInit } from '@angular/core';
import {MotifTravailService} from "../../service/MotifTravailService";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-motif-travail',
  templateUrl: './motif-travail.component.html',
  styleUrls: ['./motif-travail.component.css']
})
export class MotifTravailComponent implements OnInit {

  newMotifTravail = {
    nom: '',
    description: '',
    id: null
  };
  addOk = false;
  motifTravail: any = null;
  constructor(private motifTravailService: MotifTravailService, public http: HttpClient) { }

  ngOnInit() {
    this.motifTravailService.allMotifTravails().subscribe(resp => {
      this.motifTravail = resp;

    })
  }
  initEdit(t) {
    this.newMotifTravail = t;
  }
  initAdd() {
    this.newMotifTravail = {
      nom: '',
      description: '',
      id: null
    };
  }
  addMotifTravail() {
    console.log(this.newMotifTravail);
    if (this.newMotifTravail.nom !== '' && this.newMotifTravail.description !== '') {
      this.motifTravailService.addMotifTravail(this.newMotifTravail).subscribe(resp => {
        if (this.newMotifTravail.id === null) {
          this.motifTravail.push(resp);
          this.addOk = true;
        } else {
          this.addOk = true;
          this.ngOnInit();
        }
        console.log(resp);
        this.newMotifTravail.id = null;
        this.newMotifTravail.description = '';
        this.newMotifTravail.nom = '';
      })
    }
  }
}
