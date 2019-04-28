import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class MotifDepartService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allMotifDeparts() {
    return this.http.get(this.apiUrl + '/motifDepart/allMotifDeparts')
      .pipe(map(resp => resp));
  }
  addMotifDepart(motifDepart: any) {
    return this.http.post(this.apiUrl + '/motifDepart/addMotifDepart', motifDepart)
      .pipe(map(resp => resp));
  }

}
