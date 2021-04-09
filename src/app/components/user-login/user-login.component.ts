import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { AuthLoginService } from 'src/app/services/auth-login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  userlogin: Login;
  constructor(private loginApi: AuthLoginService) {
    this.userlogin = {};
  }

  ngOnInit(): void {}
  login() {
    this.loginApi.login(this.userlogin.name, this.userlogin.password).then(
      (r) => {
        console.log(r);
      },
      (e) => {
        console.log(e);
      }
    );
  }
  logOut() {
    this.loginApi.logOut();
  }
  
}
