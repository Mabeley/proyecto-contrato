import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public uri =environment.uri

  constructor(private readonly http: HttpClient) {
    
   }
   login(data:any): Observable<Response>{

    let myHeader = new HttpHeaders();
        myHeader = myHeader.set('Content-Type', 'application/json');
        myHeader = myHeader.set('Access-Control-Allow-Origin', 'http://localhost:4200');
        return this.http.post<Response>(this.uri + '/contractadm/seguridad/acceso',data, { headers: myHeader });
    //return this.http.post<any>(this.uri + '/contractadm/seguridad/acceso',data)
    // return this.httClient.post(this.uri,email,password)

   }
}
