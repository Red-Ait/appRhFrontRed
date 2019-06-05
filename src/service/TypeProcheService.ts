import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class TypeProcheService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allTypeProches() {
    return this.http.get(this.apiUrl + '/parametres/typeProche/allTypeProches')
      .pipe(map(resp => resp));
  }
  addTypeProche(typeProche: any) {
    return this.http.post(this.apiUrl + '/parametres/typeProche/addTypeProche', typeProche)
      .pipe(map(resp => resp));
  }

}
