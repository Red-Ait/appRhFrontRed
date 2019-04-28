import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { TypeActiviteComponent } from './type-activite/type-activite.component';
import {TypeActiviteService} from "../service/TypeActiviteService";
import { TypeAdresseComponent } from './type-adresse/type-adresse.component';
import {TypeAdresseService} from "../service/TypeAdresseService";
import { TypeAttestationComponent } from './type-attestation/type-attestation.component';
import {TypeAttestationService} from "../service/TypeAttestationService";
import { TypeContratComponent } from './type-contrat/type-contrat.component';
import {TypeContratService} from "../service/TypeContratService";
import { TypeDepartementComponent } from './type-departement/type-departement.component';
import {TypeDepartementService} from "../service/TypeDepartementService";
import { TypeDocumentComponent } from './type-document/type-document.component';
import {TypeDocumentService} from "../service/TypeDocumentService";
import { TypeEmailComponent } from './type-email/type-email.component';
import {TypeEmailService} from "../service/TypeEmailService";
import { TypePeriodeDepartementComponent } from './type-periode-departement/type-periode-departement.component';
import {TypePeriodeDepartementService} from "../service/TypePeriodeDepartementService";
import { TypeProcheComponent } from './type-proche/type-proche.component';
import {TypeProcheService} from "../service/TypeProcheService";
import { TypeReseauSocialComponent } from './type-reseau-social/type-reseau-social.component';
import {TypeReseauSocialService} from "../service/TypeReseauSocialService";
import { TypeSalaireComponent } from './type-salaire/type-salaire.component';
import {TypeSalaireService} from "../service/TypeSalaireService";
import { TypeTelephoneComponent } from './type-telephone/type-telephone.component';
import {TypeTelephoneService} from "../service/TypeTelephoneService";
import {CollaborateurService} from "../service/CollaborateurService";
import { CollaborateurComponent } from './collaborateur/collaborateur.component';
import { ProfilCollaborateurComponent } from './profil-collaborateur/profil-collaborateur.component';
import {AdresseService} from "../service/AdresseService";
import {DomaineService} from "../service/DomaineService";
import {NiveauScolaireAttestationService} from "../service/NiveauScolaireAttestationService";
import {NiveauScolaireContactService} from "../service/NiveauScolaireContactService";
import {VilleService} from "../service/VilleService";
import {AttestationFormationService} from "../service/AttestationFormationService";
import {DelivreParService} from "../service/DelivreParService";
import {ContratService} from "../service/ContratService";
import {FonctionService} from "../service/FonctionService";
import {MotifDepartService} from "../service/MotifDepartService";
import {MotifEntreeService} from "../service/MotifEntreeService";
import {RumenirationService} from "../service/RumenirationService";
import {StatusProfessionnelService} from "../service/StatusProfessionnelService";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    NavbarComponent,
    TypeActiviteComponent,
    TypeAdresseComponent,
    TypeAttestationComponent,
    TypeContratComponent,
    TypeDepartementComponent,
    TypeDocumentComponent,
    TypeEmailComponent,
    TypePeriodeDepartementComponent,
    TypeProcheComponent,
    TypeReseauSocialComponent,
    TypeSalaireComponent,
    TypeTelephoneComponent,
    CollaborateurComponent,
    ProfilCollaborateurComponent,
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,


  ],
  providers: [
    TypeActiviteService,
    TypeAdresseService,
    TypeAttestationService,
    TypeContratService,
    TypeDepartementService,
    TypeDocumentService,
    TypeEmailService,
    TypePeriodeDepartementService,
    TypeProcheService,
    TypeReseauSocialService,
    LocalStorage,
    TypeSalaireService,
    TypeTelephoneService,
    CollaborateurService,
    AdresseService,
    DomaineService,
    NiveauScolaireAttestationService,
    NiveauScolaireContactService,
    VilleService,
    AttestationFormationService,
    DelivreParService,
    ContratService,
    FonctionService,
    MotifDepartService,
    MotifEntreeService,
    RumenirationService,
    StatusProfessionnelService
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
