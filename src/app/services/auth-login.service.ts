import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthLoginService {
 HttpHeaders;
 subject:BehaviorSubject<boolean>

  constructor(
    private httpclient: HttpClient,
    private route: Router,
  ) {
    this.subject=new BehaviorSubject<boolean>(false);

    this.HttpHeaders = {
      Headers: {
        'Content-Type': 'application/json',
        toke: 'sdasads56ad5a1853168sadasd',
      },
    };
  }

  async login(name: string, password: string): Promise<boolean> {
    let userObj = {
      name: name,
      password: password,
    };
    await this.httpclient
      .post(`${environment.apiUrl2}/users`, userObj, this.HttpHeaders)
      .toPromise()
      .then(
        (res) => {
          console.log(res);
          let token = res['id'];
          console.log(token);
          localStorage.setItem('userToken', token);
          this.subject.next(true)
          this.route.navigate(['/home']);
          return true;
        },
        (e) => {
          console.log(e);
          return false;
        }
      );
    return false;
  }

  logOut() {
    localStorage.removeItem('userToken');
    this.subject.next(true)
    this.route.navigate(['/login']);
  }
  isLoggedIn(): boolean {
    return localStorage.userToken ? true : false;
  }
  loginSubject(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
