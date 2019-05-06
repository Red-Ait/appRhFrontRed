import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class PeriodeDepartementService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allPeriodeDepartements() {
    return this.http.get(this.apiUrl + '/periodeDepartement/allPeriodeDepartements')
      .pipe(map(resp => resp));
  }
  addPeriodeDepartement(periodeDepartement: any, id: number) {
    return this.http.post(this.apiUrl + '/periodeDepartement/addPeriodeDepartement/' + id, periodeDepartement)
      .pipe(map(resp => resp));
  }

}

