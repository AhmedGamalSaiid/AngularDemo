import { ActivatedRoute } from '@angular/router';
import { IProdApi } from './../../../view-module/i-prod-api';
import { ProdApiService } from 'src/app/services/prod-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod-api',
  templateUrl: './prod-api.component.html',
  styleUrls: ['./prod-api.component.scss']
})
export class ProdApiComponent implements OnInit {
prdList:IProdApi;
products;
prdid;

  constructor(private apiprodServ:ProdApiService,private activerout:ActivatedRoute) {

   }
   

  ngOnInit(): void {
    this.activerout.paramMap.subscribe((p)=>{
      this.prdid=p.get('pID')
      console.log(this.prdid);
      this.apiprodServ.getid(+this.prdid).subscribe((d)=>{
       
       this.products=d.data
       //console.log(this.products['name']);
       console.log(this.products.name);
     // this.products=  this.prdList.datat
        
        
      },(e)=>console.log(e),()=>{console.log("done");
      }
      
      )
      
    })
    // this.activerout.paramMap.subscribe((p) => {
    //   this.prdid = p.get('pID');
    //   console.log(this.prdid);
    //   this.products = this.apiprodServ.getPrdId(+this.prdid);
    // });
    // this.apiprodServ.getAllProd().subscribe(
    //   (d) => {
    //     this.prdList = d;
    //     this.products = this.prdList.data;
    //     console.log(this.products);
    //   },
    //   (e) => {
    //     console.log(e);
    //   }
    // );
  }

}
