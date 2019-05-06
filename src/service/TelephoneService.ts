import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class TelephoneService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allTelephones() {
    return this.http.get(this.apiUrl + '/telephone/allTelephones')
      .pipe(map(resp => resp));
  }
  addTelephone(telephone: any, id: number) {
    return this.http.post(this.apiUrl + '/telephone/addTelephone/' + id, telephone)
      .pipe(map(resp => resp));
  }

}

