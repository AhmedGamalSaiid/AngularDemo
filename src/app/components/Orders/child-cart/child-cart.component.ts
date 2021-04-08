import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { EventEmitter } from '@angular/core';
//import { emit } from 'node:process';
import { IProduct } from 'src/app/models/iproduct';
import { ShopCartItem } from 'src/app/models/shop-cart-item';
import { ProdServService } from 'src/app/services/prod-serv.service';

@Component({
  selector: 'app-child-cart',
  templateUrl: './child-cart.component.html',
  styleUrls: ['./child-cart.component.scss'],
})
export class ChildCartComponent implements OnInit, OnChanges {
  @Input() catId: number;
  @Output() totprice: EventEmitter<number>;
  @Output() tq: EventEmitter<object>;
  prodList: IProduct[];
  prodQuant: Array<ShopCartItem>;
  totalPriceval: number = 0;
  constructor(private prdServ: ProdServService) {
    this.tq = new EventEmitter<object>();
    this.totprice = new EventEmitter<number>();
  }
  ngOnChanges(): void {
    //console.log(this.catId);
    //this.prodList = this.prdServ.getAllprd();
  }

  ngOnInit(): void {}

  totalPrice(a, b): number {
    // this.totalPriceval;
    this.totprice.emit(this.totalPriceval);
    return (this.totalPriceval += a * b);
  }

  _increamentQTY(q, index): void {
    var count = ++this.prodList[index].Quantity;
    this.prodList[index].Quantity = count;
  }
  _decreamentQTY(q, index): void {
    count2 = --this.prodList[index].Quantity;
    this.prodList[index].Quantity = count2;
    var count2;
    if (count2 == 0) alert('less than usual');
  }
  totQuant(id, n, p, q): void {
    this.prodQuant = [
      {
        prodId: id,
        prodName: n,
        unitPrice: p,
        selectQ: q,
      },
    ];
    this.tq.emit(this.prodQuant);
  }
}
