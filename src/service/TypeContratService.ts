import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class TypeContratService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allTypeContrats() {
    return this.http.get(this.apiUrl + '/typeContrat/allTypeContrats')
      .pipe(map(resp => resp));
  }
  addTypeContrat(typeContrat: any) {
    return this.http.post(this.apiUrl + '/typeContrat/addTypeContrat', typeContrat)
      .pipe(map(resp => resp));
  }

}
