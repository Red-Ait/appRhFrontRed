import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class DemandeAuthSortieService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allDemandeAuthSorties() {
    return this.http.get(this.apiUrl + '/demandeAuthSortie/allDemandeAuthSorties')
      .pipe(map(resp => resp));
  }
  allDemandeAuthSortiesEmpl(username: string) {
    return this.http.post(this.apiUrl + '/demandeAuthSortie/employe/allDemandeAuthSorties', username)
      .pipe(map(resp => resp));
  }
  addDemandeAuthSortie(demandeAuthSortie: any) {
    return this.http.post(this.apiUrl + '/demandeAuthSortie/addDemandeAuthSortie', demandeAuthSortie)
      .pipe(map(resp => resp));
  }
  updateDemandeAuthSortie(demandeAuthSortie: any) {
    return this.http.post(this.apiUrl + '/demandeAuthSortie/updateDemandeAuthSortie', demandeAuthSortie)
      .pipe(map(resp => resp));
  }

}
