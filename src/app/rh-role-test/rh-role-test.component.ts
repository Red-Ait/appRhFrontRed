import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../service/TokenStorageService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-rh-role-test',
  templateUrl: './rh-role-test.component.html',
  styleUrls: ['./rh-role-test.component.css']
})
export class RhRoleTestComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService,
              private router: Router) { }

  ngOnInit() {
    let isOk = false;
    this.tokenStorageService.getAuthorities().forEach(role => {
      if(role === 'ROLE_RH') {
        isOk = true;
      }
    });
    if (!isOk) {
      this.router.navigate(['/role-erreur']);
    }
  }

}
