import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class CoordonnesBancairesService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allCoordonnesBancairess() {
    return this.http.get(this.apiUrl + '/coordonnesBancaires/allCoordonnesBancairess')
      .pipe(map(resp => resp));
  }
  addCoordonnesBancaires(coordonnesBancaires: any, id: number) {
    return this.http.post(this.apiUrl + '/coordonnesBancaires/addCoordonnesBancaires/' + id, coordonnesBancaires)
      .pipe(map(resp => resp));
  }

}
