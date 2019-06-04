import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class AuthService{
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  login(username: string, password: string) {
    return this.http.post(this.apiUrl + '/auth/signin', {username: username , password: password})
      .pipe(map(resp => resp));
  }
}
