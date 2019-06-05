import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class MotifTravailService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allMotifTravails() {
    return this.http.get(this.apiUrl + '/parametres/motifTravail/allMotifTravails')
      .pipe(map(resp => resp));
  }
  addMotifTravail(motifTravail: any) {
    return this.http.post(this.apiUrl + '/parametres/motifTravail/addMotifTravail', motifTravail)
      .pipe(map(resp => resp));
  }

}
