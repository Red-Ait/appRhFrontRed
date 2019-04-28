import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class RumenirationService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allRumenirations() {
    return this.http.get(this.apiUrl + '/rumeniration/allRumenirations')
      .pipe(map(resp => resp));
  }
  addRumeniration(rumeniration: any) {
    return this.http.post(this.apiUrl + '/rumeniration/addRumeniration', rumeniration)
      .pipe(map(resp => resp));
  }

}
