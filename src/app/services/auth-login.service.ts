import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {
HttpHeaders;
  constructor(private httpclient:HttpClient) { 
    this.HttpHeaders={
      Headers:{
        "Content-Type":"application/json"
      } 
    }
  }


  async login(name:string,password:string):Promise<boolean>{
    let userObj={
      name:name,
      password:password,
    }
   await this.httpclient.post(`${environment.apiUrl2}/users`,userObj)
   .toPromise().then((res)=>{
     console.log(res);
      return true},
      (e)=>{console.log(e);
       return false})
    return false;
  }
}
