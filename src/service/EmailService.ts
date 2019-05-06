import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class EmailService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allEmails() {
    return this.http.get(this.apiUrl + '/email/allEmails')
      .pipe(map(resp => resp));
  }
  addEmail(email: any, id: number) {
    return this.http.post(this.apiUrl + '/email/addEmail/' + id, email)
      .pipe(map(resp => resp));
  }

}
