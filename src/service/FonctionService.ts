import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class FonctionService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allFonctions() {
    return this.http.get(this.apiUrl + '/parametres/fonction/allFonctions')
      .pipe(map(resp => resp));
  }
  addFonction(fonction: any) {
    return this.http.post(this.apiUrl + '/parametres/fonction/addFonction', fonction)
      .pipe(map(resp => resp));
  }

}
