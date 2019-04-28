import { Component, OnInit } from '@angular/core';
import {TypeDocumentService} from "../../service/TypeDocumentService";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-type-document',
  templateUrl: './type-document.component.html',
  styleUrls: ['./type-document.component.css']
})
export class TypeDocumentComponent implements OnInit {

  newTypeDocument = {
    nom: '',
    description: ''
  };
  addOk = false;
  typesDocument: any = null;
  constructor(private typeDocumentService: TypeDocumentService, public http: HttpClient) { }

  ngOnInit() {
    this.typeDocumentService.allTypeDocuments().subscribe(resp => {
      this.typesDocument = resp;
    })
  }
  addTypeDocument() {
    console.log(this.newTypeDocument);
    if (this.newTypeDocument.nom !== '' && this.newTypeDocument.description !== '') {
      this.typeDocumentService.addTypeDocument(this.newTypeDocument).subscribe(resp => {
        this.typesDocument.push(resp);
        this.addOk = true;
        console.log(resp);
        this.newTypeDocument.description = '';
        this.newTypeDocument.nom = '';
      })
    }
  }
}
