import { Component, OnInit } from '@angular/core';
import {MotifAbsenceService} from "../../service/MotifAbsenceService";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-motif-Absence',
  templateUrl: './motif-absence.component.html',
  styleUrls: ['./motif-absence.component.css']
})
export class MotifAbsenceComponent implements OnInit {

  newMotifAbsence = {
    nom: '',
    description: '',
    id: null
  };
  addOk = false;
  motifAbsence: any = null;
  constructor(private motifAbsenceService: MotifAbsenceService, public http: HttpClient) { }

  ngOnInit() {
    this.motifAbsenceService.allMotifAbsences().subscribe(resp => {
      this.motifAbsence = resp;

    })
  }
  initEdit(t) {
    this.newMotifAbsence = t;
  }
  initAdd() {
    this.newMotifAbsence = {
      nom: '',
      description: '',
      id: null
    };
  }
  addMotifAbsence() {
    console.log(this.newMotifAbsence);
    if (this.newMotifAbsence.nom !== '' && this.newMotifAbsence.description !== '') {
      this.motifAbsenceService.addMotifAbsence(this.newMotifAbsence).subscribe(resp => {
        if (this.newMotifAbsence.id === null) {
          this.motifAbsence.push(resp);
          this.addOk = true;
        } else {
          this.addOk = true;
          this.ngOnInit();
        }
        console.log(resp);
        this.newMotifAbsence.id = null;
        this.newMotifAbsence.description = '';
        this.newMotifAbsence.nom = '';
      })
    }
  }
}
