import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class ContratService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allContrats() {
    return this.http.get(this.apiUrl + '/contrat/allContrats')
      .pipe(map(resp => resp));
  }
  addContrat(contrat: any, id: number) {
    return this.http.post(this.apiUrl + '/contrat/addContrat/' + id, contrat)
      .pipe(map(resp => resp));
  }

}
