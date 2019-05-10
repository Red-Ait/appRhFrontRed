import { Component, OnInit } from '@angular/core';
import {LangueService} from "../../service/LangueService";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-langue',
  templateUrl: './langue.component.html',
  styleUrls: ['./langue.component.css']
})
export class LangueComponent implements OnInit {

  newLangue = {
    titre: '',
    description: '',
    id: null
  };
  addOk = false;
  langue: any = null;
  constructor(private langueService: LangueService, public http: HttpClient) { }

  ngOnInit() {
    this.langueService.allLangues().subscribe(resp => {
      this.langue = resp;

    })
  }
  initEdit(t) {
    this.newLangue = t;
  }
  initAdd() {
    this.newLangue = {
      titre: '',
      description: '',
      id: null
    };
  }
  addLangue() {
    console.log(this.newLangue);
    if (this.newLangue.titre !== '' && this.newLangue.description !== '') {
      this.langueService.addLangue(this.newLangue).subscribe(resp => {
        if (this.newLangue.id === null) {
          this.langue.push(resp);
          this.addOk = true;
        } else {
          this.addOk = true;
          this.ngOnInit();
        }
        console.log(resp);
        this.newLangue.id = null;
        this.newLangue.description = '';
        this.newLangue.titre = '';
      })
    }
  }
}
