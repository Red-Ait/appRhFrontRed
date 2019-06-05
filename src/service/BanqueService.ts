import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class BanqueService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allBanques() {
    return this.http.get(this.apiUrl + '/parametres/banque/allBanques')
      .pipe(map(resp => resp));
  }
  addBanque(banque: any) {
    return this.http.post(this.apiUrl + '/parametres/banque/addBanque', banque)
      .pipe(map(resp => resp));
  }

}
