import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class DocumentService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allDocuments() {
    return this.http.get(this.apiUrl + '/document/allDocuments')
      .pipe(map(resp => resp));
  }
  addDocument(document: any, id: number) {
    return this.http.post(this.apiUrl + '/document/addDocument/' + id, document)
      .pipe(map(resp => resp));
  }

}
