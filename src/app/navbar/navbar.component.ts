import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../service/TokenStorageService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService,
              private router: Router,
  ) { }

  ngOnInit() {
    console.log(this.tokenStorageService.getAuthorities());
    if (this.tokenStorageService.getToken() === null) {
      this.router.navigate(['/login']);
    }

  }
  logOut() {
    this.tokenStorageService.signOut();
    this.router.navigate(['/login']);

  }
}
