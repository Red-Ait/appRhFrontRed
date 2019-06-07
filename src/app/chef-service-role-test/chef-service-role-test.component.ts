import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../service/TokenStorageService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-chef-service-role-test',
  templateUrl: './chef-service-role-test.component.html',
  styleUrls: ['./chef-service-role-test.component.css']
})
export class ChefServiceRoleTestComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService,
              private router: Router) { }

  ngOnInit() {
    let isOk = false;
    this.tokenStorageService.getAuthorities().forEach(role => {
      if(role === 'ROLE_CHEF_SERVICE') {
        isOk = true;
      }
    });
    if (!isOk) {
      this.router.navigate(['/role-erreur']);
    }
  }

}
