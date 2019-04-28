import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class NiveauScolaireContactService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allNiveauScolaireContacts() {
    return this.http.get(this.apiUrl + '/niveauScolaireContact/allNiveauScolaireContacts')
      .pipe(map(resp => resp));
  }
  addNiveauScolaireContact(niveauScolaireContact: any) {
    return this.http.post(this.apiUrl + '/niveauScolaireContact/addNiveauScolaireContact', niveauScolaireContact)
      .pipe(map(resp => resp));
  }

}
