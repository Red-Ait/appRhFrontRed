import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class DemandeAuTravService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allDemandeAuTravs() {
    return this.http.get(this.apiUrl + '/demandeAuTrav/allDemandeAuTravs')
      .pipe(map(resp => resp));
  }
  allDemandeAuTravsEmpl(username: string) {
    return this.http.post(this.apiUrl + '/demandeAuTrav/employe/allDemandeAuTravs', username)
      .pipe(map(resp => resp));
  }
  addDemandeAuTrav(demandeAuTrav: any) {
    return this.http.post(this.apiUrl + '/demandeAuTrav/addDemandeAuTrav', demandeAuTrav)
      .pipe(map(resp => resp));
  }

}
