import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class LigneGroupeService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allLigneGroupes() {
    return this.http.get(this.apiUrl + '/ligneGroupe/allLigneGroupes')
      .pipe(map(resp => resp));
  }
  addLigneGroupe(ligneGroupe: any, id: number) {
    return this.http.post(this.apiUrl + '/ligneGroupe/addLigneGroupe/' + id, ligneGroupe)
      .pipe(map(resp => resp));
  }

}
