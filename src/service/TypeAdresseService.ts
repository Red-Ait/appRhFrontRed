import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class TypeAdresseService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allTypeAdresses() {
    return this.http.get(this.apiUrl + '/parametres/typeAdresse/allTypeAdresses')
      .pipe(map(resp => resp));
  }
  addTypeAdresse(typeAdresse: any) {
    return this.http.post(this.apiUrl + '/parametres/typeAdresse/addTypeAdresse', typeAdresse)
      .pipe(map(resp => resp));
  }

}
