import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class LanguesService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allLanguess() {
    return this.http.get(this.apiUrl + '/langues/allLanguess')
      .pipe(map(resp => resp));
  }
  addLangues(langues: any, id: number) {
    return this.http.post(this.apiUrl + '/langues/addLangues/' + id, langues)
      .pipe(map(resp => resp));
  }

}
