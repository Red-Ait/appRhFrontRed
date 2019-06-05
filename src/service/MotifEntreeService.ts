import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class MotifEntreeService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allMotifEntrees() {
    return this.http.get(this.apiUrl + '/parametres/motifEntree/allMotifEntrees')
      .pipe(map(resp => resp));
  }
  addMotifEntree(motifEntree: any) {
    return this.http.post(this.apiUrl + '/parametres/motifEntree/addMotifEntree', motifEntree)
      .pipe(map(resp => resp));
  }

}
