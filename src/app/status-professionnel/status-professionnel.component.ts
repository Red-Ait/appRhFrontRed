import { Component, OnInit } from '@angular/core';
import {StatusProfessionnelService} from "../../service/StatusProfessionnelService";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-status-professionnel',
  templateUrl: './status-professionnel.component.html',
  styleUrls: ['./status-professionnel.component.css']
})
export class StatusProfessionnelComponent implements OnInit {

  newStatusProfessionnel = {
    nom: '',
    description: '',
    id: null
  };
  addOk = false;
  statusProfessionnel: any = null;
  constructor(private statusProfessionnelService: StatusProfessionnelService, public http: HttpClient) { }

  ngOnInit() {
    this.statusProfessionnelService.allStatusProfessionnels().subscribe(resp => {
      this.statusProfessionnel = resp;

    })
  }
  initEdit(t) {
    this.newStatusProfessionnel = t;
  }
  initAdd() {
    this.newStatusProfessionnel = {
      nom: '',
      description: '',
      id: null
    };
  }
  addStatusProfessionnel() {
    console.log(this.newStatusProfessionnel);
    if (this.newStatusProfessionnel.nom !== '' && this.newStatusProfessionnel.description !== '') {
      this.statusProfessionnelService.addStatusProfessionnel(this.newStatusProfessionnel).subscribe(resp => {
        if (this.newStatusProfessionnel.id === null) {
          this.statusProfessionnel.push(resp);
          this.addOk = true;
        } else {
          this.addOk = true;
          this.ngOnInit();
        }
        console.log(resp);
        this.newStatusProfessionnel.id = null;
        this.newStatusProfessionnel.description = '';
        this.newStatusProfessionnel.nom = '';
      })
    }
  }
}
