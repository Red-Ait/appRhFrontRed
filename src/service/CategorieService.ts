import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class CategorieService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allCategories() {
    return this.http.get(this.apiUrl + '/categorie/allCategories')
      .pipe(map(resp => resp));
  }
  addCategorie(categorie: any) {
    return this.http.post(this.apiUrl + '/categorie/addCategorie', categorie)
      .pipe(map(resp => resp));
  }

}
