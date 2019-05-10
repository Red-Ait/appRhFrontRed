import { DataService } from 'src/service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {

  comp:any;
  dateNow = new Date();
  currentMonth = null;
  currentYear = null;
  parametrage:any;
nb:any =0;

  constructor( public dataSrv:DataService ) { }


  ngOnInit() {
    this.dataSrv.notPayYet().subscribe(resp=>{
      this.nb=resp;
    })


  this.dataSrv.getParametrage().subscribe(param=>{
       this.parametrage=param;
       console.log(this.parametrage)
  })

    this.dataSrv.allComp().subscribe( resp => {
      this.currentMonth = this.dateNow.getMonth();
      this.currentYear = this.dateNow.getFullYear();
      this.comp = resp;
      console.log(this.comp)
      this.comp.forEach(cmp => {
          cmp.tounages.forEach(tg => {
            if (tg.id.date.date.mois == (this.currentMonth - 1) && tg.id.date.date.annee == this.currentYear) {
                cmp.lastTounage = tg;
                 cmp.newConsommation = tg;

          }
          if (tg.id.date.date.mois == (this.currentMonth ) && tg.id.date.date.annee == this.currentYear) {
            cmp.newConsommation = tg;
          }


      });

      if(0 < cmp.newConsommation.consommation - cmp.lastTounage.consommation && cmp.newConsommation.consommation - cmp.lastTounage.consommation <=this.parametrage.pointT2)
      {
        cmp.tranch=1;
        cmp.prixTranch=this.parametrage.prixUnitaireT1;
        cmp.newConsommation.facture.prixUnitaire=this.parametrage.prixUnitaireT1;

      }else if (this.parametrage.pointT2 < cmp.newConsommation.consommation - cmp.lastTounage.consommation && cmp.newConsommation.consommation - cmp.lastTounage.consommation <=this.parametrage.pointT3){
        cmp.tranch=2;
        cmp.prixTranch=this.parametrage.prixUnitaireT2;
        cmp.newConsommation.facture.prixUnitaire=this.parametrage.prixUnitaireT2;

      }else{
        cmp.tranch=3;
        cmp.prixTranch=this.parametrage.prixUnitaireT3;
        cmp.newConsommation.facture.prixUnitaire=this.parametrage.prixUnitaireT3;


      }

      if(cmp.typePaiemnet=='mois'){
      cmp.prixTotal=(cmp.newConsommation.consommation - cmp.lastTounage.consommation)*cmp.prixTranch+cmp.nbrAdults*cmp.region.tarif+this.parametrage.taxeFixe+cmp.trita
    } else{
      cmp.prixTotal=(cmp.newConsommation.consommation - cmp.lastTounage.consommation)*cmp.prixTranch+this.parametrage.taxeFixe+cmp.trita

    }



    cmp.newConsommation.facture.taxeFixe=this.parametrage.taxeFixe;
    cmp.newConsommation.facture.duree=this.parametrage.duree;

    });
    });


  }

pay(f:any){

  console.log(f)
  console.log(f.newConsommation.facture)
  this.dataSrv.pay(f.newConsommation.facture).subscribe(res=>{

    if(res=true){
      console.log("ok/////")
      this.comp.splice(this.comp.indexOf(f),1)
      this.nb--;
    }else
    {
      console.log("error/////")

    }
  })
}

}

