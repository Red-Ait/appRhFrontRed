import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class DepartementService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allDepartements() {
    return this.http.get(this.apiUrl + '/departement/allDepartements')
      .pipe(map(resp => resp));
  }
  addDepartement(departement: any) {
    return this.http.post(this.apiUrl + '/departement/addDepartement', departement)
      .pipe(map(resp => resp));
  }

}
