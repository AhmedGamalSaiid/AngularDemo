import { AuthLoginService } from 'src/app/services/auth-login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  login: boolean;
  constructor(private logoutServ: AuthLoginService) {
    this.login = logoutServ.isLoggedIn();
  }

  ngOnInit(): void {
    this.logoutServ.loginSubject().subscribe((res) => {
      this.login = res;
    });
  }
  logOut() {
    this.logoutServ.logOut();
    this.login = this.logoutServ.isLoggedIn();
  }
}
