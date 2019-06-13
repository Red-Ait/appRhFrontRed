import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/AuthService";
import {TokenStorageService} from "../../service/TokenStorageService";

@Component({
  selector: 'app-update-mdp',
  templateUrl: './update-mdp.component.html',
  styleUrls: ['./update-mdp.component.css']
})
export class UpdateMdpComponent implements OnInit {

  ancMdp = '';
  nvMdp =  '';
  confMdp = '';
  showMdpNv = false;
  showMdpAnc = false;
  showMdpconf = false;
  isMdpNvErr = false;
  isMdpAncErr = false;
  isMdpconfErr = false;
  upOk = false;
  constructor(private tokenStorageService: TokenStorageService,
              private auth: AuthService
  ) { }

  ngOnInit() {
  }
  ok() {
    let a = true;
    if (this.nvMdp.length >= 8) {
      this.isMdpNvErr = false;
    } else {
      this.isMdpNvErr = true;
      a = false;
    }
    if (this.nvMdp === this.confMdp) {
      this.isMdpconfErr = false;
    } else {
      this.isMdpconfErr = true;
      a = false;
    }
    if (a) {
      this.auth.login(this.tokenStorageService.getUsername(), this.ancMdp).subscribe(d => {
        this.auth.updateMdp(this.tokenStorageService.getUsername(), this.nvMdp).subscribe(ds => {
          this.nvMdp = '';
          this.ancMdp = '';
          this.confMdp = '';
          this.upOk = true;
        });
      } , error1 => {
        console.log('ppppp');
        this.isMdpAncErr = true;})
    }
    }
}
