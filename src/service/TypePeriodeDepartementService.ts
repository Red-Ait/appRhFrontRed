import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class TypePeriodeDepartementService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allTypePeriodeDepartements() {
    return this.http.get(this.apiUrl + '/parametres/typePeriodeDepartement/allTypePeriodeDepartements')
      .pipe(map(resp => resp));
  }
  addTypePeriodeDepartement(typePerDep: any) {
    return this.http.post(this.apiUrl + '/parametres/typePeriodeDepartement/addTypePeriodeDepartement', typePerDep)
      .pipe(map(resp => resp));
  }

}
