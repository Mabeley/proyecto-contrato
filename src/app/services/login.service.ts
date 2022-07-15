import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public uri =environment.uri

  constructor(private readonly httClient: HttpClient) {
    
   }
   login(data:any){
    return this.httClient.post<any>(this.uri + '/contractadm/seguridad/acceso',data)
    // return this.httClient.post(this.uri,email,password)

   }
}
