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
import {BanqueService} from "../service/BanqueService";
import {CoordonnesBancairesService} from "../service/CoordonnesBancairesService";
import {DocumentService} from "../service/DocumentService";
import {EmailService} from "../service/EmailService";
import {LangueService} from "../service/LangueService";
import {NiveauLangueService} from "../service/NiveauLangueService";
import {LanguesService} from "../service/LanguesService";
import {GroupeService} from "../service/GroupeService";
import {LigneGroupeService} from "../service/LigneGroupeService";
import {DepartementService} from "../service/DepartementService";
import {PeriodeDepartementService} from "../service/PeriodeDepartementService";
import {ReseauSocialService} from "../service/ReseauSocialService";
import {TelephoneService} from "../service/TelephoneService";
import {CategorieService} from "../service/CategorieService";
import { AddCollaborateurComponent } from './add-collaborateur/add-collaborateur.component';
import { CategorieComponent } from './categorie/categorie.component';
import { NiveauScolaireContactComponent } from './niveau-scolaire-contact/niveau-scolaire-contact.component';
import { GroupeComponent } from './groupe/groupe.component';
import { LangueComponent } from './langue/langue.component';
import { NiveauLangueComponent } from './niveau-langue/niveau-langue.component';
import { DelivreParComponent } from './delivre-par/delivre-par.component';
import { VilleComponent } from './ville/ville.component';
import { FonctionComponent } from './fonction/fonction.component';
import { MotifDepartComponent } from './motif-depart/motif-depart.component';
import { MotifEntreeComponent } from './motif-entree/motif-entree.component';
import { StatusProfessionnelComponent } from './status-professionnel/status-professionnel.component';
import { BanqueComponent } from './banque/banque.component';
import { Profil2Component } from './profil2/profil2.component';
import { MotifAbsenceComponent } from './motif-absence/motif-absence.component';
import {MotifAbsenceService} from "../service/MotifAbsenceService";
import { MotifSortieComponent } from './motif-sortie/motif-sortie.component';
import {MotifSortieService} from "../service/MotifSortieService";
import { MotifTravailComponent } from './motif-travail/motif-travail.component';
import {MotifTravailService} from "../service/MotifTravailService";
import { TypeAttestationEntrepriseComponent } from './type-attestation-entreprise/type-attestation-entreprise.component';
import {TypeAttestationEntrepriseService} from "../service/TypeAttestationEntrepriseService";
import { DemandeComponent } from './demande/demande.component';
import {DemandeService} from "../service/DemandeService";
import {DemandeAbsenceService} from "../service/DemandeAbsenceService";
import {DemandeAttestationService} from "../service/DemandeAttestationService";
import {DemandeAuthSortieService} from "../service/DemandeAuthSortieService";
import {DemandeAuTravService} from "../service/DemandeAuTravService";
import { AddDemandeComponent } from './add-demande/add-demande.component';
import {UploadPhotoCollaborateurService} from "../service/UploadPhotoCollaborateurService";
import {UploadPdfAttestationFromationService} from "../service/UploadPdfAttestationFromationService";
import {UploadPdfContratService} from "../service/UploadPdfContratService";
import { LoginComponent } from './login/login.component';
import {AuthService} from "../service/AuthService";
import {NgxLocalStorageModule} from "ngx-localstorage";
import {TokenStorageService} from "../service/TokenStorageService";
import { AdministrateurRoleTestComponent } from './administrateur-role-test/administrateur-role-test.component';
import { RoleErreurComponent } from './role-erreur/role-erreur.component';
import {httpInterceptorProviders} from "../service/AuthInterceptor";
import { RhRoleTestComponent } from './rh-role-test/rh-role-test.component';
import { ChefServiceRoleTestComponent } from './chef-service-role-test/chef-service-role-test.component';
import {UtilisateurService} from "../service/UserService";
import { UpdateMdpComponent } from './update-mdp/update-mdp.component';



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
    AddCollaborateurComponent,
    CategorieComponent,
    NiveauScolaireContactComponent,
    GroupeComponent,
    LangueComponent,
    NiveauLangueComponent,
    DelivreParComponent,
    VilleComponent,
    FonctionComponent,
    MotifDepartComponent,
    MotifEntreeComponent,
    StatusProfessionnelComponent,
    BanqueComponent,
    Profil2Component,
    MotifAbsenceComponent,
    MotifSortieComponent,
    MotifTravailComponent,
    TypeAttestationEntrepriseComponent,
    DemandeComponent,
    AddDemandeComponent,
    LoginComponent,
    AdministrateurRoleTestComponent,
    RoleErreurComponent,
    RhRoleTestComponent,
    ChefServiceRoleTestComponent,
    UpdateMdpComponent,
  ],
  imports: [

    NgxLocalStorageModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,


  ],
  providers: [
    UtilisateurService,
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
    StatusProfessionnelService,
    BanqueService,
    MotifAbsenceService,
    MotifSortieService,
    MotifTravailService,
    TypeAttestationEntrepriseService,
    DemandeService,
    DemandeAbsenceService,
    DemandeAttestationService,
    DemandeAuthSortieService,
    DemandeAuTravService,
    CoordonnesBancairesService,
    DocumentService,
    EmailService,
    LangueService,
    NiveauLangueService,
    LanguesService,
    GroupeService,
    LigneGroupeService,
    DepartementService,
    PeriodeDepartementService,
    ReseauSocialService,
    TelephoneService,
    CategorieService,
    NiveauScolaireContactService,
    UploadPhotoCollaborateurService,
    UploadPdfAttestationFromationService,
    UploadPdfContratService,
    AuthService,
    TokenStorageService,
    httpInterceptorProviders
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
