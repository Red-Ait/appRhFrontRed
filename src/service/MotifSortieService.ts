import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class MotifSortieService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allMotifSorties() {
    return this.http.get(this.apiUrl + '/motifSortie/allMotifSorties')
      .pipe(map(resp => resp));
  }
  addMotifSortie(motifSortie: any) {
    return this.http.post(this.apiUrl + '/motifSortie/addMotifSortie', motifSortie)
      .pipe(map(resp => resp));
  }

}
