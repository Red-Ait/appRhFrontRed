import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TypeActiviteComponent} from "./type-activite/type-activite.component";
import {TypeAdresseComponent} from "./type-adresse/type-adresse.component";
import {TypeAttestationComponent} from "./type-attestation/type-attestation.component";
import {TypeContratComponent} from "./type-contrat/type-contrat.component";
import {TypeDepartementComponent} from "./type-departement/type-departement.component";
import {TypeDocumentComponent} from "./type-document/type-document.component";
import {TypeEmailComponent} from "./type-email/type-email.component";
import {TypePeriodeDepartementComponent} from "./type-periode-departement/type-periode-departement.component";
import { TypeProcheComponent } from './type-proche/type-proche.component';
import {TypeReseauSocialComponent} from "./type-reseau-social/type-reseau-social.component";
import {TypeSalaireComponent} from "./type-salaire/type-salaire.component";
import {TypeTelephoneComponent} from "./type-telephone/type-telephone.component";
import {CollaborateurComponent} from "./collaborateur/collaborateur.component";
import {ProfilCollaborateurComponent} from "./profil-collaborateur/profil-collaborateur.component";
import {AddCollaborateurComponent} from "./add-collaborateur/add-collaborateur.component";
import {CategorieComponent} from "./categorie/categorie.component";
import {NiveauScolaireContactComponent} from "./niveau-scolaire-contact/niveau-scolaire-contact.component";
import {GroupeComponent} from "./groupe/groupe.component";
import {LangueComponent} from "./langue/langue.component";
import {NiveauLangueComponent} from "./niveau-langue/niveau-langue.component";
import {DelivreParComponent} from "./delivre-par/delivre-par.component";
import {VilleComponent} from "./ville/ville.component";
import {FonctionComponent} from "./fonction/fonction.component";
import {MotifDepartComponent} from "./motif-depart/motif-depart.component";
import {MotifEntreeComponent} from "./motif-entree/motif-entree.component";
import {StatusProfessionnelComponent} from "./status-professionnel/status-professionnel.component";
import {BanqueComponent} from "./banque/banque.component";
import {Profil2Component} from "./profil2/profil2.component";
import {MotifAbsenceComponent} from "./motif-absence/motif-absence.component";
import {MotifSortieComponent} from "./motif-sortie/motif-sortie.component";
import {MotifTravailComponent} from "./motif-travail/motif-travail.component";
import {TypeAttestationEntrepriseComponent} from "./type-attestation-entreprise/type-attestation-entreprise.component";
import {DemandeComponent} from "./demande/demande.component";
import {AddDemandeComponent} from "./add-demande/add-demande.component";
import {LoginComponent} from "./login/login.component";
import {RoleErreurComponent} from "./role-erreur/role-erreur.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},


  {path: 'parametres/type-activite', component: TypeActiviteComponent},
  {path: 'parametres/type-adresse', component: TypeAdresseComponent},
  {path: 'parametres/type-attestation', component: TypeAttestationComponent},
  {path: 'parametres/type-contrat', component: TypeContratComponent},
  {path: 'parametres/type-departement', component: TypeDepartementComponent},
  {path: 'parametres/type-document', component: TypeDocumentComponent},
  {path: 'parametres/type-email', component: TypeEmailComponent},
  {path: 'parametres/type-periode-departement', component: TypePeriodeDepartementComponent},
  {path: 'parametres/type-proche', component: TypeProcheComponent},
  {path: 'parametres/type-reseau-social', component: TypeReseauSocialComponent},
  {path: 'parametres/type-salaire', component: TypeSalaireComponent},
  {path: 'parametres/type-telephone', component: TypeTelephoneComponent},
  {path: 'parametres/categorie', component: CategorieComponent},
  {path: 'parametres/niveauScolaireContact', component: NiveauScolaireContactComponent},
  {path: 'parametres/langue', component: LangueComponent},
  {path: 'parametres/niveauLangue', component: NiveauLangueComponent},
  {path: 'parametres/delivrePar', component: DelivreParComponent},
  {path: 'parametres/ville', component: VilleComponent},
  {path: 'parametres/fonction', component: FonctionComponent},
  {path: 'parametres/motifDepart', component: MotifDepartComponent},
  {path: 'parametres/motifEntree', component: MotifEntreeComponent},
  {path: 'parametres/motifSortie', component: MotifSortieComponent},
  {path: 'parametres/motifTravail', component: MotifTravailComponent},
  {path: 'parametres/TypeAttestationEntreprise', component: TypeAttestationEntrepriseComponent},
  {path: 'parametres/motifAbsence', component: MotifAbsenceComponent},
  {path: 'parametres/statusProfessionnel', component: StatusProfessionnelComponent},
  {path: 'parametres/banque', component: BanqueComponent},
  {path: 'parametres/groupe', component: GroupeComponent},

  {path: 'collaborateur', component: CollaborateurComponent},
  {path: 'add-collaborateur', component: AddCollaborateurComponent},
  {path: 'profil-collaborateur/:id', component: ProfilCollaborateurComponent},


  {path: 'demande', component: DemandeComponent},


  {path: 'profil2', component: Profil2Component},
  {path: 'add-demande', component: AddDemandeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'role-erreur', component: RoleErreurComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
