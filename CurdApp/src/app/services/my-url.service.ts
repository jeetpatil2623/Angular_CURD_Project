import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyUrlService {

  // I have Created on Servive Which we can use with Multipale Compnents
  
  constructor(private http: HttpClient) { }

  url='http://localhost:8080';

  geturl(){
    return this.url
  }
  editEmpId:number;
}
