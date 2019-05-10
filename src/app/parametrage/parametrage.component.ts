import { DataService } from 'src/service/data.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-parametrage',
  templateUrl: './parametrage.component.html',
  styleUrls: ['./parametrage.component.css']
})


export class ParametrageComponent implements OnInit {

  parametre:any;

  rs:any;
  msg:any;

  constructor(public dataSrv:DataService) { }

  ngOnInit() {
    this.dataSrv.getParametrage().subscribe(data=>{
      this.parametre=data;
    })
  }

    onSubmit() {
this.dataSrv.uploadParametre(this.parametre).subscribe(data=>{
this.rs=data;
if(this.rs!=null){
  this.msg="  تم الحفظ بنجاح";
}else{
  this.msg="المرجو اعادة المحاولة";
}
});
   }





}
