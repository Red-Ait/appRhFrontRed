import { Component, OnInit } from '@angular/core';
import {MotifEntreeService} from "../../service/MotifEntreeService";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-motif-entree',
  templateUrl: './motif-entree.component.html',
  styleUrls: ['./motif-entree.component.css']
})
export class MotifEntreeComponent implements OnInit {

newMotifEntree = {
  nom: '',
  description: '',
  id: null
};
addOk = false;
motifEntree: any = null;
constructor(private motifEntreeService: MotifEntreeService, public http: HttpClient) { }

ngOnInit() {
  this.motifEntreeService.allMotifEntrees().subscribe(resp => {
    this.motifEntree = resp;

  })
}
initEdit(t) {
  this.newMotifEntree = t;
}
initAdd() {
  this.newMotifEntree = {
    nom: '',
    description: '',
    id: null
  };
}
addMotifEntree() {
  console.log(this.newMotifEntree);
  if (this.newMotifEntree.nom !== '' && this.newMotifEntree.description !== '') {
    this.motifEntreeService.addMotifEntree(this.newMotifEntree).subscribe(resp => {
      if (this.newMotifEntree.id === null) {
        this.motifEntree.push(resp);
        this.addOk = true;
      } else {
        this.addOk = true;
        this.ngOnInit();
      }
      console.log(resp);
      this.newMotifEntree.id = null;
      this.newMotifEntree.description = '';
      this.newMotifEntree.nom = '';
    })
  }
}
}
