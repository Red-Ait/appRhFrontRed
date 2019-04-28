import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class NiveauScolaireAttestationService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allNiveauScolaireAttestations() {
    return this.http.get(this.apiUrl + '/niveauScolaireAttestation/allNiveauScolaireAttestations')
      .pipe(map(resp => resp));
  }
  addNiveauScolaireAttestation(niveauScolaireAttestation: any) {
    return this.http.post(this.apiUrl + '/niveauScolaireAttestation/addNiveauScolaireAttestation', niveauScolaireAttestation)
      .pipe(map(resp => resp));
  }

}
