import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProdApi } from '../view-module/i-prod-api';
import {  OnChanges } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ProdApiService {
  iprd:IProdApi;
 
  constructor(private httpClient: HttpClient) {

  }
  getAllProd(): Observable<IProdApi> {
    return this.httpClient.get<IProdApi>(`${environment.apiUrl}/product`);
  }
  getAllPerPage(): Observable<IProdApi> {
    return this.httpClient.get<IProdApi>(`${environment.apiUrl}/product?page=2`);
  }
  getid(d){
    return this.httpClient.get<IProdApi>(`${environment.apiUrl}/product/`+d);
  }
  addProd(b){
    return this.httpClient.post('https://reqres.in/api/users',b)
  }
  
}
