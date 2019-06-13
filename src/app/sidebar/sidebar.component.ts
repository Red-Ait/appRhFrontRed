import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../service/TokenStorageService";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isAdministrateur = false;
  isRh = false;
  isChefService = false;
  isEmploye = false;
  isRoot = false;
  constructor(private tokenStorageService: TokenStorageService,
  ) { }

  ngOnInit() {
    this.tokenStorageService.getAuthorities().forEach(role => {
      if(role === 'ROLE_ROOT') {
        this.isRoot= true;
      }
      if(role === 'ROLE_ADMINISTRATEUR') {
        this.isAdministrateur = true;
      }
      if(role === 'ROLE_RH') {
        this.isRh = true;
      }
      if(role === 'ROLE_CHEF_SERVICE') {
        this.isChefService = true;
      }
      if(role === 'ROLE_EMPLOYE') {
        this.isEmploye = true;
      }
    });

  }

}
