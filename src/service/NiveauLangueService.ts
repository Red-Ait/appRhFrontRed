import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class NiveauLangueService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allNiveauLangues() {
    return this.http.get(this.apiUrl + '/parametres/niveauLangue/allNiveauLangues')
      .pipe(map(resp => resp));
  }
  addNiveauLangue(niveauLangue: any) {
    return this.http.post(this.apiUrl + '/parametres/niveauLangue/addNiveauLangue', niveauLangue)
      .pipe(map(resp => resp));
  }

}
