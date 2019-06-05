  import {Injectable} from "@angular/core";
  import {HttpClient} from "@angular/common/http";
  import {map} from "rxjs/operators";

  @Injectable()
  export class TypeEmailService {
    apiUrl = 'http://localhost:8088';
    constructor(public http: HttpClient) {
    }

    allTypeEmails() {
      return this.http.get(this.apiUrl + '/parametres/typeEmail/allTypeEmails')
        .pipe(map(resp => resp));
    }
    addTypeEmail(typeEmail: any) {
      return this.http.post(this.apiUrl + '/parametres/typeEmail/addTypeEmail', typeEmail)
        .pipe(map(resp => resp));
    }

  }
