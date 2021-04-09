import { AuthLoginService } from 'src/app/services/auth-login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authLogin:AuthLoginService,private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isLoggedIn=this.authLogin.isLoggedIn();
    if(!isLoggedIn){
      this.route.navigate(['login'])
    }
    return this.authLogin.isLoggedIn();
  }
  
}
