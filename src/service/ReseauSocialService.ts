import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class ReseauSocialService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allReseauSocials() {
    return this.http.get(this.apiUrl + '/reseauSocial/allReseauSocials')
      .pipe(map(resp => resp));
  }
  addReseauSocial(reseauSocial: any, id: number) {
    return this.http.post(this.apiUrl + '/reseauSocial/addReseauSocial/' + id, reseauSocial)
      .pipe(map(resp => resp));
  }

}

