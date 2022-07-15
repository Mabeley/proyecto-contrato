import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(
    private readonly http : HttpClient
  ) { }

  getSamples(){
    return this.http.get('/api/sample/getsamples');
  }
}
