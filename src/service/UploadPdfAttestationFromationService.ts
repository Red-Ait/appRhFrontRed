import {Injectable} from "@angular/core";
import {HttpClient, HttpRequest} from "@angular/common/http";

@Injectable()
export class UploadPdfAttestationFromationService{

  apiUrl = 'http://localhost:8088';
  constructor(private http: HttpClient) {}

  pushFileToStorage(file: File, id: string){
    let formdata: FormData = new FormData();
    console.log('pdf');
    formdata.append('file', file);
    formdata.append('id' , id);
    const req = new HttpRequest('POST', this.apiUrl + '/pdfattestationformation/post', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  getFiles(){
    return this.http.get('/pdfattestationformation/getallfiles');
  }
}
