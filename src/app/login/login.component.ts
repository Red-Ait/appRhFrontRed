import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/AuthService";
import {LocalStorage} from "@ngx-pwa/local-storage";
import {Router} from "@angular/router";
import {TokenStorageService} from "../../service/TokenStorageService";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errForm = false;
  username = '';
  password = '';
  aux : any;
  constructor(private authService: AuthService,
              private router: Router,
              private tokenStorageService: TokenStorageService,
                ) { }

  ngOnInit() {
    if (this.tokenStorageService.getToken()) {
      this.router.navigate(['/profil']);
    }
  }

  login() {
    this.authService.login(this.username, this.password).subscribe(d => {
      console.log(d);
      this.aux = d;
      this.tokenStorageService.saveToken(this.aux.accessToken);
      this.tokenStorageService.saveUsername(this.aux.username);
      this.tokenStorageService.saveAuthorities(this.aux.authorities);

      this.router.navigate(['/profil']);
    }, error1 => {
      this.errForm = true;
    });

  }

}
