import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class TypeAttestationEntrepriseService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allTypeAttestationEntreprises() {
    return this.http.get(this.apiUrl + '/parametres/typeAttestationEntreprise/allTypeAttestationEntreprises')
      .pipe(map(resp => resp));
  }
  addTypeAttestationEntreprise(typeAttestationEntreprise: any) {
    return this.http.post(this.apiUrl + '/parametres/typeAttestationEntreprise/addTypeAttestationEntreprise', typeAttestationEntreprise)
      .pipe(map(resp => resp));
  }

}
