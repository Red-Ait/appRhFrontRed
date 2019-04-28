import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class TypeDepartementService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allTypeDepartements() {
    return this.http.get(this.apiUrl + '/typeDepartement/allTypeDepartements')
      .pipe(map(resp => resp));
  }
  addTypeDepartement(typeDepartement: any) {
    return this.http.post(this.apiUrl + '/typeDepartement/addTypeDepartement', typeDepartement)
      .pipe(map(resp => resp));
  }

}
