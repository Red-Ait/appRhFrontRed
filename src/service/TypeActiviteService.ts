import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class TypeActiviteService {
    apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allTypeActivites() {
    return this.http.get(this.apiUrl + '/typeActivite/allTypeActivites')
      .pipe(map(resp => resp));
  }
  addTypeActivite(typeActivite: any) {
    return this.http.post(this.apiUrl + '/typeActivite/addTypeActivite', typeActivite)
      .pipe(map(resp => resp));
  }

}
