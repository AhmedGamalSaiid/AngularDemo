import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';
import { ProdServService } from 'src/app/services/prod-serv.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  prd: IProduct;
  prdid;
  constructor(
    private activerout: ActivatedRoute,
    private servprd: ProdServService,
    private bkloc: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    //this.prdid = +this.activerout.snapshot.prdidamMap.get('pID');
    this.activerout.paramMap.subscribe((p) => {
      this.prdid = p.get('pID');
      console.log(this.prdid);
      this.prd = this.servprd.getPrdId(+this.prdid);
    });
   
  }
  goBack() {
    this.bkloc.back();
  }
  prv() {
    console.log(this.prdid);
    let p = parseInt(this.prdid);
    this.router.navigate(['/products/', p - 1]);
  }
  nxt() {
    this.router.navigate(['/products/', parseInt(this.prdid) + 1]);
  }
}
