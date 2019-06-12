import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../service/TokenStorageService";
import {Router} from "@angular/router";
import {AuthService} from "../../service/AuthService";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user = null;
  constructor(private tokenStorageService: TokenStorageService,
              private router: Router,
              private auth: AuthService
  ) { }

  ngOnInit() {
    if (this.tokenStorageService.getToken() === null) {
      this.router.navigate(['/login']);
    } else {
      this.auth.getCurrentUser().subscribe(d => {
        this.user = d;
      });
    }
    console.log(this.tokenStorageService.getAuthorities());
  }
  logOut() {
    this.tokenStorageService.signOut();
    this.router.navigate(['/login']);

  }
}
