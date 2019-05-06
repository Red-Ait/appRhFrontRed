import { Component, OnInit } from '@angular/core';
import {TypeEmailService} from "../../service/TypeEmailService";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-type-email',
  templateUrl: './type-email.component.html',
  styleUrls: ['./type-email.component.css']
})
export class TypeEmailComponent implements OnInit {

  newTypeEmail = {
    nom: '',
    description: '',
    id: null
  };
  addOk = false;
  typesEmail: any = null;
  constructor(private typeEmailService: TypeEmailService, public http: HttpClient) { }

  ngOnInit() {
    this.typeEmailService.allTypeEmails().subscribe(resp => {
      this.typesEmail = resp;
    })
  }
  initEdit(t) {
    this.newTypeEmail = t;
  }
  initAdd() {
    this.newTypeEmail = {
      nom: '',
      description: '',
      id: null
    };
  }
  addTypeEmail() {
    console.log(this.newTypeEmail);
    if (this.newTypeEmail.nom !== '' && this.newTypeEmail.description !== '') {
      this.typeEmailService.addTypeEmail(this.newTypeEmail).subscribe(resp => {
        if (this.newTypeEmail.id === null) {
          this.typesEmail.push(resp);
          this.addOk = true;
        } else {
          this.addOk = true;
          this.ngOnInit();
        }
        console.log(resp);
        this.newTypeEmail.description = '';
        this.newTypeEmail.nom = '';
        this.newTypeEmail.id = null;
      })
    }
  }
}
