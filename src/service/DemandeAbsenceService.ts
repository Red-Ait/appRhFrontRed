import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class DemandeAbsenceService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allDemandeAbsences() {
    return this.http.get(this.apiUrl + '/demandeAbsence/allDemandeAbsences')
      .pipe(map(resp => resp));
  }
  allDemandeAbsencesEmpl(username: string) {
    return this.http.post(this.apiUrl + '/demandeAbsence/employe/allDemandeAbsences', username)
      .pipe(map(resp => resp));
  }
  addDemandeAbsence(demandeAbsence: any) {
    return this.http.post(this.apiUrl + '/demandeAbsence/addDemandeAbsence', demandeAbsence)
      .pipe(map(resp => resp));
  }
  updateDemandeAbsence(demandeAbsence: any) {
    return this.http.post(this.apiUrl + '/demandeAbsence/updateDemandeAbsence', demandeAbsence)
      .pipe(map(resp => resp));
  }

}
