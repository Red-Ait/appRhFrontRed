import { Component, OnInit } from '@angular/core';
import {MotifSortieService} from "../../service/MotifSortieService";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-motif-sortie',
  templateUrl: './motif-sortie.component.html',
  styleUrls: ['./motif-sortie.component.css']
})
export class MotifSortieComponent implements OnInit {

  newMotifSortie = {
    nom: '',
    description: '',
    id: null
  };
  addOk = false;
  motifSortie: any = null;
  constructor(private motifSortieService: MotifSortieService, public http: HttpClient) { }

  ngOnInit() {
    this.motifSortieService.allMotifSorties().subscribe(resp => {
      this.motifSortie = resp;

    })
  }
  initEdit(t) {
    this.newMotifSortie = t;
  }
  initAdd() {
    this.newMotifSortie = {
      nom: '',
      description: '',
      id: null
    };
  }
  addMotifSortie() {
    console.log(this.newMotifSortie);
    if (this.newMotifSortie.nom !== '' && this.newMotifSortie.description !== '') {
      this.motifSortieService.addMotifSortie(this.newMotifSortie).subscribe(resp => {
        if (this.newMotifSortie.id === null) {
          this.motifSortie.push(resp);
          this.addOk = true;
        } else {
          this.addOk = true;
          this.ngOnInit();
        }
        console.log(resp);
        this.newMotifSortie.id = null;
        this.newMotifSortie.description = '';
        this.newMotifSortie.nom = '';
      })
    }
  }
}
