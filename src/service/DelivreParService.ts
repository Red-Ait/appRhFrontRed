import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class DelivreParService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allDelivrePars() {
    return this.http.get(this.apiUrl + '/delivrePar/allDelivrePars')
      .pipe(map(resp => resp));
  }
  addDelivrePar(delivrePar: any) {
    return this.http.post(this.apiUrl + '/delivrePar/addDelivrePar', delivrePar)
      .pipe(map(resp => resp));
  }

}
