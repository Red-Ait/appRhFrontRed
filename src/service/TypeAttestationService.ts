import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class TypeAttestationService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allTypeAttestations() {
    return this.http.get(this.apiUrl + '/typeAttestation/allTypeAttestations')
      .pipe(map(resp => resp));
  }
  addTypeAttestation(typeAttestation: any) {
    return this.http.post(this.apiUrl + '/typeAttestation/addTypeAttestation', typeAttestation)
      .pipe(map(resp => resp));
  }

}
