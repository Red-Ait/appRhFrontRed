import { Component, OnInit } from '@angular/core';
import {CategorieService} from "../../service/CategorieService";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  newCategorie = {
    nom: '',
    description: '',
    id: null
  };
  addOk = false;
  categorie: any = null;
  constructor(private categorieService: CategorieService, public http: HttpClient) { }

  ngOnInit() {
    this.categorieService.allCategories().subscribe(resp => {
      this.categorie = resp;

    })
  }
  initEdit(t) {
    this.newCategorie = t;
  }
  initAdd() {
    this.newCategorie = {
      nom: '',
      description: '',
      id: null
    };
  }
  addCategorie() {
    console.log(this.newCategorie);
    if (this.newCategorie.nom !== '' && this.newCategorie.description !== '') {
      this.categorieService.addCategorie(this.newCategorie).subscribe(resp => {
        if (this.newCategorie.id === null) {
          this.categorie.push(resp);
          this.addOk = true;
        } else {
          this.addOk = true;
          this.ngOnInit();
        }
        console.log(resp);
        this.newCategorie.id = null;
        this.newCategorie.description = '';
        this.newCategorie.nom = '';
      })
    }
  }
}
