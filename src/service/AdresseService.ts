import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class AdresseService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allAdresses() {
    return this.http.get(this.apiUrl + '/adresse/allAdresses')
      .pipe(map(resp => resp));
  }
  addAdresse(adresse: any, id: number) {
    return this.http.post(this.apiUrl + '/adresse/addAdresse/' + id, adresse)
      .pipe(map(resp => resp));
  }

}
