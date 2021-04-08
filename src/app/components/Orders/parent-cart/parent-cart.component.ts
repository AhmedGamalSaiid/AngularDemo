import { Component, NgModule, OnInit } from '@angular/core';
import { ICategory, ICategory2 } from 'src/app/models/icategory';
import { ShopCartItem } from 'src/app/models/shop-cart-item';
import { JsonServService } from 'src/app/services/json-serv.service';
import { ProdServService } from 'src/app/services/prod-serv.service';

@Component({
  selector: 'app-parent-cart',
  templateUrl: './parent-cart.component.html',
  styleUrls: ['./parent-cart.component.scss'],
})
export class ParentCartComponent implements OnInit {
  a:any;
  mysel: number;
  catId: number;
  tPrice: number = 0;
  prodQuant: Array<ShopCartItem>;
  constructor(private prodServ: ProdServService,private json:JsonServService) {
    
    
  }

  ngOnInit(): void {
    this.json.getAllCat().subscribe((d)=>{
      console.log(d);
      //why this dont work this.a=d and a = array og icat
      this.a=d;
      console.log(this.a);
      
      
    })
  }
  totalPricee(e) {
    this.tPrice = e;
  }
  totqu(event): void {
    this.prodQuant = event;
  }
  
}
