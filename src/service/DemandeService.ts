import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class DemandeService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allDemandes() {
    return this.http.get(this.apiUrl + '/demande/allDemandes')
      .pipe(map(resp => resp));
  }
  addDemande(demande: any) {
    return this.http.post(this.apiUrl + '/demande/addDemande', demande)
      .pipe(map(resp => resp));
  }

}
