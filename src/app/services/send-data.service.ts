import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {
  uri = environment.uri

  constructor(
    private http : HttpClient
  ) { }

  sendPost(body:FormData):Observable<any>{
    return this.http.post(this.uri + '/contractadm/proceso/listartipo', body)
  }
}
