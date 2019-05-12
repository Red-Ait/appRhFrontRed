import { Component, OnInit } from '@angular/core';
import {DemandeService} from "../../service/DemandeService";
import {CollaborateurService} from "../../service/CollaborateurService";

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {

  addOk = false;
  demandes = null;
  collabs = null;
  typeDemande = '';
  constructor(
    private collabService: CollaborateurService,
    private demandeService: DemandeService) { }

  ngOnInit() {
    this.demandeService.allDemandes().subscribe(data => {
      console.log(data);
      this.demandes = data;
    });
  }
  initAdd() {
    this.collabService.allCollaborateurs(null , null).subscribe(d => {
      this.collabs = d;
    });
  }

}
