import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class TypeDocumentService {
  apiUrl = 'http://localhost:8088';
  constructor(public http: HttpClient) {
  }

  allTypeDocuments() {
    return this.http.get(this.apiUrl + '/typeDocument/allTypeDocuments')
      .pipe(map(resp => resp));
  }
  addTypeDocument(typeDocument: any) {
    return this.http.post(this.apiUrl + '/typeDocument/addTypeDocument', typeDocument)
      .pipe(map(resp => resp));
  }

}
