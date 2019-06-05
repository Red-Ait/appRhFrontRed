import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class VilleService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allVilles() {
    return this.http.get(this.apiUrl + '/parametres/ville/allVilles')
      .pipe(map(resp => resp));
  }
  addVille(ville: any) {
    return this.http.post(this.apiUrl + '/parametres/ville/addVille', ville)
      .pipe(map(resp => resp));
  }

}
