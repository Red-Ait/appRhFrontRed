import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class TypeSalaireService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allTypeSalaires() {
    return this.http.get(this.apiUrl + '/typeSalaire/allTypeSalaires')
      .pipe(map(resp => resp));
  }
  addTypeSalaire(typeSalaire: any) {
    return this.http.post(this.apiUrl + '/typeSalaire/addTypeSalaire', typeSalaire)
      .pipe(map(resp => resp));
  }

}
