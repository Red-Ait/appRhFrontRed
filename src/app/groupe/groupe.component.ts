import { Component, OnInit } from '@angular/core';
import {GroupeService} from "../../service/GroupeService";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.css']
})
export class GroupeComponent implements OnInit {

  newGroupe = {
    nom: '',
    description: '',
    id: null
  };
  addOk = false;
  groupe: any = null;
  constructor(private groupeService: GroupeService, public http: HttpClient) { }

  ngOnInit() {
    this.groupeService.allGroupes().subscribe(resp => {
      this.groupe = resp;

    })
  }
  initEdit(t) {
    this.newGroupe = t;
  }
  initAdd() {
    this.newGroupe = {
      nom: '',
      description: '',
      id: null
    };
  }
  addGroupe() {
    console.log(this.newGroupe);
    if (this.newGroupe.nom !== '' && this.newGroupe.description !== '') {
      this.groupeService.addGroupe(this.newGroupe).subscribe(resp => {
        if (this.newGroupe.id === null) {
          this.groupe.push(resp);
          this.addOk = true;
        } else {
          this.addOk = true;
          this.ngOnInit();
        }
        console.log(resp);
        this.newGroupe.id = null;
        this.newGroupe.description = '';
        this.newGroupe.nom = '';
      })
    }
  }
}
