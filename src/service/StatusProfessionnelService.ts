import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class StatusProfessionnelService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allStatusProfessionnels() {
    return this.http.get(this.apiUrl + '/parametres/statusProfessionnel/allStatusProfessionnels')
      .pipe(map(resp => resp));
  }
  addStatusProfessionnel(statusProfessionnel: any) {
    return this.http.post(this.apiUrl + '/parametres/statusProfessionnel/addStatusProfessionnel', statusProfessionnel)
      .pipe(map(resp => resp));
  }

}
