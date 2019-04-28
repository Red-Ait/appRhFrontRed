import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class TypeReseauSocialService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allTypeReseauSocials() {
    return this.http.get(this.apiUrl + '/typeReseauSocial/allTypeReseauSocials')
      .pipe(map(resp => resp));
  }
  addTypeReseauSocial(typeReseauSocial: any) {
    return this.http.post(this.apiUrl + '/typeReseauSocial/addTypeReseauSocial', typeReseauSocial)
      .pipe(map(resp => resp));
  }

}
