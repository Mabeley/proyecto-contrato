import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  uri = environment.uri
  headers = new HttpHeaders();

  constructor(
    private readonly http : HttpClient,
  ) { }

  getTypes(){
    let usuario = sessionStorage.getItem('usuario');
    if (usuario != null) {
      var data = JSON.parse(usuario);
      let myHeader = new HttpHeaders();
      myHeader = myHeader.set('Content-Type', 'application/json');
      myHeader = myHeader.set('Authorization', 'Bearer ' + data.token);
      return this.http.get(this.uri + '/contractadm/proceso/listartipos', { headers: myHeader })
    }else {
      console.log("sin sesion");
      return this.http.get(this.uri + '/contractadm/proceso/listartipos')
    }
  }

  getMuestra(){
    let usuario = sessionStorage.getItem('usuario');
    let envio = sessionStorage.getItem('idEnvio');
    if (usuario != null) {
      var data = JSON.parse(usuario);
      let myHeader = new HttpHeaders();
      myHeader = myHeader.set('Content-Type', 'application/json');
      myHeader = myHeader.set('Authorization', 'Bearer ' + data.token);
      return this.http.get(this.uri + '/contractadm/proceso/listarMuestra/' + envio + '/-', { headers: myHeader })
    }else {
      console.log("sin sesion");
      return this.http.get(this.uri + '/contractadm/proceso/listarMuestra')
    }
  }

}