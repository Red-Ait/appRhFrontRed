import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class CollaborateurService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  getCollaborateurById(id: number) {
    return this.http.get(this.apiUrl + '/collaborateur/collaborateur/' + id)
      .pipe(map(resp => resp));
  }
  allCollaborateurs(page: number, size: number) {
    return this.http.get(this.apiUrl + '/collaborateur/allCollaborateurs?page=' + page + '&size=' + size)
      .pipe(map(resp => resp));
  }
  addCollaborateur(collaborateur: any) {
    return this.http.post(this.apiUrl + '/collaborateur/addCollaborateur', collaborateur)
      .pipe(map(resp => resp));
  }
  countCollaborateur (inp: string) {
    return this.http.get(this.apiUrl + '/collaborateur/countCollaborateur?q=' + inp)
      .pipe(map(resp => resp));
  }
  search (q: string, page: number, size:number) {
    return this.http.get(this.apiUrl + '/collaborateur/search?q=' + q + '&page=' + page + '&size=' + size)
      .pipe(map(resp => resp));
  }
}
