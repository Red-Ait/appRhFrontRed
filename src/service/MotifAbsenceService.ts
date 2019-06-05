import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class MotifAbsenceService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allMotifAbsences() {
    return this.http.get(this.apiUrl + '/parametres/motifAbsence/allMotifAbsences')
      .pipe(map(resp => resp));
  }
  addMotifAbsence(motifAbsence: any) {
    return this.http.post(this.apiUrl + '/parametres/motifAbsence/addMotifAbsence', motifAbsence)
      .pipe(map(resp => resp));
  }

}
