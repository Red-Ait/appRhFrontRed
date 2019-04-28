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
    description: ''
  };
  addOk = false;
  typesEmail: any = null;
  constructor(private typeEmailService: TypeEmailService, public http: HttpClient) { }

  ngOnInit() {
    this.typeEmailService.allTypeEmails().subscribe(resp => {
      this.typesEmail = resp;
    })
  }
  addTypeEmail() {
    console.log(this.newTypeEmail);
    if (this.newTypeEmail.nom !== '' && this.newTypeEmail.description !== '') {
      this.typeEmailService.addTypeEmail(this.newTypeEmail).subscribe(resp => {
        this.typesEmail.push(resp);
        this.addOk = true;
        console.log(resp);
        this.newTypeEmail.description = '';
        this.newTypeEmail.nom = '';
      })
    }
  }
}
