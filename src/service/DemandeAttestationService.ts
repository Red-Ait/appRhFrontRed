import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class DemandeAttestationService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allDemandeAttestations() {
    return this.http.get(this.apiUrl + '/demandeAttestation/allDemandeAttestations')
      .pipe(map(resp => resp));
  }
  addDemandeAttestation(demandeAttestation: any) {
    return this.http.post(this.apiUrl + '/demandeAttestation/addDemandeAttestation', demandeAttestation)
      .pipe(map(resp => resp));
  }

}
