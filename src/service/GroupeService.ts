import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class GroupeService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allGroupes() {
    return this.http.get(this.apiUrl + '/groupe/allGroupes')
      .pipe(map(resp => resp));
  }
  addGroupe(groupe: any) {
    return this.http.post(this.apiUrl + '/groupe/addGroupe', groupe)
      .pipe(map(resp => resp));
  }

}
