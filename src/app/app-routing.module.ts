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

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'type-activite', component: TypeActiviteComponent},
  {path: 'type-adresse', component: TypeAdresseComponent},
  {path: 'type-attestation', component: TypeAttestationComponent},
  {path: 'type-contrat', component: TypeContratComponent},
  {path: 'type-departement', component: TypeDepartementComponent},
  {path: 'type-document', component: TypeDocumentComponent},
  {path: 'type-email', component: TypeEmailComponent},
  {path: 'type-periode-departement', component: TypePeriodeDepartementComponent},
  {path: 'type-proche', component: TypeProcheComponent},
  {path: 'type-reseau-social', component: TypeReseauSocialComponent},
  {path: 'type-salaire', component: TypeSalaireComponent},
  {path: 'type-telephone', component: TypeTelephoneComponent},
  {path: 'collaborateur', component: CollaborateurComponent},
  {path: 'add-collaborateur', component: AddCollaborateurComponent},
  {path: 'profil-collaborateur/:id', component: ProfilCollaborateurComponent},
  {path: 'categorie', component: CategorieComponent},
  {path: 'niveauScolaireContact', component: NiveauScolaireContactComponent},
  {path: 'langue', component: LangueComponent},
  {path: 'niveauLangue', component: NiveauLangueComponent},
  {path: 'delivrePar', component: DelivreParComponent},
  {path: 'ville', component: VilleComponent},
  {path: 'fonction', component: FonctionComponent},
  {path: 'motifDepart', component: MotifDepartComponent},
  {path: 'motifEntree', component: MotifEntreeComponent},
  {path: 'motifSortie', component: MotifSortieComponent},
  {path: 'motifTravail', component: MotifTravailComponent},
  {path: 'TypeAttestationEntreprise', component: TypeAttestationEntrepriseComponent},
  {path: 'motifAbsence', component: MotifAbsenceComponent},
  {path: 'statusProfessionnel', component: StatusProfessionnelComponent},
  {path: 'demande', component: DemandeComponent},
  {path: 'banque', component: BanqueComponent},
  {path: 'profil2', component: Profil2Component},
  {path: 'groupe', component: GroupeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
