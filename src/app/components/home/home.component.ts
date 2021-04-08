import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/models/store';
import { ProdServService } from 'src/app/services/prod-serv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isopen: boolean = true;
  storeDet: Store;

  constructor(private prodserv: ProdServService) {
    this.storeDet = this.prodserv.getStore();
  }

  ngOnInit(): void {}
}
