import { environment } from './../../environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IProduct } from './../models/iproduct';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {
prod:IProduct;
HttpHeaders;
  constructor(private HttpClient:HttpClient) {
    this.HttpHeaders={
      Headers:{
        "Content-Type":"application/json"
      } 
    }
   }
  addProduct(prod:IProduct):Observable<any> {
    return this.HttpClient.post<any>(`${environment.apiUrl2}/products`,prod);
  }
}
