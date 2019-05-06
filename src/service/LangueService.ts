import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class LangueService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allLangues() {
    return this.http.get(this.apiUrl + '/langue/allLangues')
      .pipe(map(resp => resp));
  }
  addLangue(langue: any) {
    return this.http.post(this.apiUrl + '/langue/addLangue', langue)
      .pipe(map(resp => resp));
  }

}
