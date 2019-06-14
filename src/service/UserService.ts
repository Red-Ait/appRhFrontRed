import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class UtilisateurService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allUtilisateurs() {
    return this.http.get(this.apiUrl + '/utilisateur/allUtilisateurs')
      .pipe(map(resp => resp));
  }
  addUtilisateur(utilisateur: any) {
    return this.http.post(this.apiUrl + '/auth/signup', utilisateur)
      .pipe(map(resp => resp));
  }
  getUser(username: string) {
    return this.http.post(this.apiUrl + '/utilisateur/getUtilisateur', username)
      .pipe(map(resp => resp));
  }
  getUserByCollabId(id : number) {
    return this.http.post(this.apiUrl + '/utilisateur/getUserByCollabId', id)
      .pipe(map(resp => resp));
  }
  addRole(id : number, role: string) {
    return this.http.post(this.apiUrl + '/utilisateur/'+ id +'/addRole', role)
      .pipe(map(resp => resp));
  }
}
