import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../service/TokenStorageService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-administrateur-role-test',
  templateUrl: './administrateur-role-test.component.html',
  styleUrls: ['./administrateur-role-test.component.css']
})
export class AdministrateurRoleTestComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService,
              private router: Router) { }

  ngOnInit() {
    let isOk = false;
    this.tokenStorageService.getAuthorities().forEach(role => {
      if(role === 'ROLE_ADMINISTRATEUR') {
        isOk = true;
      }
    });
    if (!isOk) {
      this.router.navigate(['/role-erreur']);
    }
  }

}
