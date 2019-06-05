import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class TypeTelephoneService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allTypeTelephones() {
    return this.http.get(this.apiUrl + '/parametres/typeTelephone/allTypeTelephones')
      .pipe(map(resp => resp));
  }
  addTypeTelephone(typeTelephone: any) {
    return this.http.post(this.apiUrl + '/parametres/typeTelephone/addTypeTelephone', typeTelephone)
      .pipe(map(resp => resp));
  }

}
