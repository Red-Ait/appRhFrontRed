import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'http://localhost:8088';

  constructor(public http:HttpClient) { }


  nbclient(){
    return this.http.get(this.url+'/client/count');
  }

  allclient(){
    return this.http.get(this.url+'/client/allClients');
  }
  addclient(clt:any){
    return this.http.post(this.url+'/client/addClient',clt);
  }
  addComp(comp:any){
    return this.http.post(this.url+'/compteur/addCompteur',comp);
  }


  allComp(){
    return this.http.get(this.url+'/compteur/allCompteurs');
  }

  allRegions(){
    return this.http.get(this.url+'/region/allRegion');
  }

  uploadParametre(para:any){
    return this.http.post(this.url+'/parametrage/updateParametrage',para);
  }

  getTounageByComp(id:any){
    return this.http.post(this.url+'/tounage/getTounageById',id);
  }

  addTounage(tounage:any,compteur:any){
    return this.http.post(this.url+'/tounage/addTounage',{tounage,compteur});
  }


 getParametrage(id=1){
    return this.http.post(this.url+'/parametrage/getParametrage',id);
  }


  getnbPage(nb){
    return this.http.post(this.url+'/client/nbPage',nb);
  }
  getAll(page:0,size:0){
    return this.http.post(this.url+'/client/getAll',{page,size})
  }

  addFacture(f:any){
    return this.http.post(this.url+'/facture/updateFacture',f)
  }
  printed(f:any){
    return this.http.post(this.url+'/facture/isPrinted',f)
  }
  allPrinted(f:any){
    return this.http.post(this.url+'/facture/isAllPrinted',f)
  }
  pay(facture:any){
    return this.http.post(this.url+'/facture/isPay',facture)
  }
  notPayYet(){
    return this.http.get(this.url+'/facture/notPayYet')
  }

}
