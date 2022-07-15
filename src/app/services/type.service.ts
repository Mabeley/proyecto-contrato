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
    return this.http.get(this.uri + '/contractadm/proceso/listartipo');
  }
}