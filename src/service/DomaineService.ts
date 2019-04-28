import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class DomaineService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allDomaines() {
    return this.http.get(this.apiUrl + '/domaine/allDomaines')
      .pipe(map(resp => resp));
  }
  addDomaine(domaine: any) {
    return this.http.post(this.apiUrl + '/domaine/addDomaine', domaine)
      .pipe(map(resp => resp));
  }

}
