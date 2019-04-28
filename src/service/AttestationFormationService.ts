import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class AttestationFormationService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allAttestationFormations() {
    return this.http.get(this.apiUrl + '/attestationFormation/allAttestationFormations')
      .pipe(map(resp => resp));
  }
  addAttestationFormation(attestationFormation: any, id: number) {
    return this.http.post(this.apiUrl + '/attestationFormation/addAttestationFormation/' + id, attestationFormation)
      .pipe(map(resp => resp));
  }

}
