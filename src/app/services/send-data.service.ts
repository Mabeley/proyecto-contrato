import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SendDataService {
  uri = environment.uri

  constructor(
    private http : HttpClient
  ) { }

  enviarArchivo(body:any):Observable<any>{
    
    let usuario = sessionStorage.getItem('usuario');
    if (usuario != null) {

      var data = JSON.parse(usuario);
      //body.append('idTipo', "1");
      //body.append('idUsuario', "1");

      let myHeader = new HttpHeaders();
      myHeader = myHeader.set('Content-Type', 'application/json');
      myHeader = myHeader.set('Authorization', 'Bearer ' + data.token);
      return this.http.post(this.uri + '/contractadm/proceso/cargarData', body, { headers: myHeader })
    }else {
      console.log("sin sesion");
      return this.http.post(this.uri + '/contractadm/proceso/cargarData',null)
    }
    
  }

  procesarData(){
    let usuario = sessionStorage.getItem('usuario');
    let idEnvio = sessionStorage.getItem('idEnvio');
    if (usuario != null) {
      var data = JSON.parse(usuario);
      let myHeader = new HttpHeaders();
      myHeader = myHeader.set('Content-Type', 'application/json');
      myHeader = myHeader.set('Authorization', 'Bearer ' + data.token);
      var envio ={"idEnvio": idEnvio};
      return this.http.post(this.uri + '/contractadm/proceso/procesarEnvio', envio,{ headers: myHeader })
    }else {
      console.log("sin sesion");
      return this.http.post(this.uri + '/contractadm/proceso/procesarEnvio', null)
    }
  }

}
