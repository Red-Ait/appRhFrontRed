import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TypeReseauSocialService} from "../../service/TypeReseauSocialService";

@Component({
  selector: 'app-type-reseau-social',
  templateUrl: './type-reseau-social.component.html',
  styleUrls: ['./type-reseau-social.component.css']
})
export class TypeReseauSocialComponent implements OnInit {

  newTypeReseauSocial = {
    nom: '',
    description: '',
    icon: ''
  };
  addOk = false;
  typesReseauSocial: any = null;
  constructor(private typeReseauSocialService: TypeReseauSocialService, public http: HttpClient) { }

  ngOnInit() {
    this.typeReseauSocialService.allTypeReseauSocials().subscribe(resp => {
      this.typesReseauSocial = resp;
    })
  }
  addTypeReseauSocial() {
    console.log(this.newTypeReseauSocial);
    if (this.newTypeReseauSocial.nom !== '' && this.newTypeReseauSocial.description !== '') {
      this.typeReseauSocialService.addTypeReseauSocial(this.newTypeReseauSocial).subscribe(resp => {
        this.typesReseauSocial.push(resp);
        this.addOk = true;
        console.log(resp);
        this.newTypeReseauSocial.description = '';
        this.newTypeReseauSocial.nom = '';
      })
    }
  }
}
