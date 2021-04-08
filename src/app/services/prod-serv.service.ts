import { Injectable } from '@angular/core';
import { ICategory2 } from '../models/icategory';
import { IProduct } from '../models/iproduct';
import { Store } from '../models/store';
import { JsonServService } from './json-serv.service';

@Injectable({
  providedIn: 'root',
})
export class ProdServService {
  private prodList: IProduct[];
  private category;
  private store: Store;
  constructor(private jsonserv:JsonServService) {
    this.prodList = [
      {
        ID: 1,
        Name: 'iphone 12pro',
        Quantity: 1,
        Price: 190,
        Img: '../../assets/l1.jpg',
        CateogryID: 1,
      },

      {
        ID: 2,
        Name: 'iphone 11pro',
        Quantity: 10,
        Price: 2,
        Img: '/assets/l1.jpg',
        CateogryID: 1,
      },

      {
        ID: 3,
        Name: 'iphone xs max',
        Quantity: 58,
        Price: 2,
        Img: '/assets/l1.jpg',
        CateogryID: 1,
      },
      {
        ID: 4,
        Name: 'mac book pro',
        Quantity: 4,
        Price: 1000,
        Img: '../../assets/l1.jpg',
        CateogryID: 2,
      },

      {
        ID: 5,
        Name: 'm1 air',
        Quantity: 34,
        Price: 1200,
        Img: '/assets/l1.jpg',
        CateogryID: 2,
      },

      {
        ID: 6,
        Name: 'mac air',
        Quantity: 47,
        Price: 1402,
        Img: '/assets/l1.jpg',
        CateogryID: 2,
      },
      {
        ID: 7,
        Name: 'watch z4',
        Quantity: 4,
        Price: 1000,
        Img: '../../assets/l1.jpg',
        CateogryID: 3,
      },

      {
        ID: 8,
        Name: 'watch f34',
        Quantity: 35,
        Price: 1200,
        Img: '/assets/l1.jpg',
        CateogryID: 3,
      },

      {
        ID: 9,
        Name: 'watch ad85',
        Quantity: 16,
        Price: 1402,
        Img: '/assets/l1.jpg',
        CateogryID: 3,
      },
    ];
    
    // this.category = [
    //   {
    //     ID: 1,
    //     Name: 'iphone',
    //   },
    //   {
    //     ID: 2,
    //     Name: 'macbook',
    //   },
    //   {
    //     ID: 3,
    //     Name: 'applewatch',
    //   },
    // ];
    this.store = new Store(
      'Marketnaa',
      ['EG', 'USA', 'UAE'],
      'https://i.picsum.photos/id/567/200/300.jpg?blur=2&hmac=Vmkq2WY2pyZtt-EkGfp02N2vw-r7ESc1b-NyTVv8Bac'
    );
  }
  getAllprd(): IProduct[] {
    return this.prodList;
  }
  getAllCat(): ICategory2[]{
    
    this.jsonserv.getAllCat().subscribe(
    (d)=>{this.category=d
      console.log(this.category);
    },
    (e)=>{console.log(e);
    }
    ,()=>{console.log("completed");
    })
    return this.category;
  }
  getStore() {
    console.log(this.store);

    return this.store;
  }
  getPrdId(prdId: number) {
    return this.prodList.find((prd) => prd.ID == prdId);
  }
}
