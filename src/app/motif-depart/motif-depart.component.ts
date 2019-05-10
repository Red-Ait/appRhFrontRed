import { Component, OnInit } from '@angular/core';
import {MotifDepartService} from "../../service/MotifDepartService";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-motif-depart',
  templateUrl: './motif-depart.component.html',
  styleUrls: ['./motif-depart.component.css']
})
export class MotifDepartComponent implements OnInit {

  newMotifDepart = {
    nom: '',
    description: '',
    id: null
  };
  addOk = false;
  motifDepart: any = null;
  constructor(private motifDepartService: MotifDepartService, public http: HttpClient) { }

  ngOnInit() {
    this.motifDepartService.allMotifDeparts().subscribe(resp => {
      this.motifDepart = resp;

    })
  }
  initEdit(t) {
    this.newMotifDepart = t;
  }
  initAdd() {
    this.newMotifDepart = {
      nom: '',
      description: '',
      id: null
    };
  }
  addMotifDepart() {
    console.log(this.newMotifDepart);
    if (this.newMotifDepart.nom !== '' && this.newMotifDepart.description !== '') {
      this.motifDepartService.addMotifDepart(this.newMotifDepart).subscribe(resp => {
        if (this.newMotifDepart.id === null) {
          this.motifDepart.push(resp);
          this.addOk = true;
        } else {
          this.addOk = true;
          this.ngOnInit();
        }
        console.log(resp);
        this.newMotifDepart.id = null;
        this.newMotifDepart.description = '';
        this.newMotifDepart.nom = '';
      })
    }
  }
}
