import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/AuthService";
import {LocalStorage} from "@ngx-pwa/local-storage";
import {Router} from "@angular/router";

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
              private localStorage: LocalStorage) { }

  ngOnInit() {

  }

  login() {
    this.authService.login(this.username, this.password).subscribe(d => {
      console.log(d);
      this.aux = d;
      this.router.navigate(['/home']);
      this.localStorage.setItem('token',this.aux.accessToken).subscribe();
    }, error1 => {
      this.errForm = true;
    });

  }

}
