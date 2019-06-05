import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../service/TokenStorageService";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isAdministrateur = false;
  constructor(private tokenStorageService: TokenStorageService,
  ) { }

  ngOnInit() {
    this.tokenStorageService.getAuthorities().forEach(role => {
      if(role === 'ROLE_ADMINISTRATEUR') {
        this.isAdministrateur = true;
      }
    });

  }

}
