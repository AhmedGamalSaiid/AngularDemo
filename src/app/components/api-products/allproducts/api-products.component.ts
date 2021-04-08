import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdApiService } from 'src/app/services/prod-api.service';
import { IProdApi } from 'src/app/view-module/i-prod-api';

@Component({
  selector: 'app-api-products',
  templateUrl: './api-products.component.html',
  styleUrls: ['./api-products.component.scss'],
})
export class ApiProductsComponent implements OnInit {
  prodlistapi: IProdApi;
  products;
  prodObj:object;
  constructor(private apiprod: ProdApiService,private activeRout:ActivatedRoute,private rout:Router) {
    this.prodObj={
      "name": "morpheus",
      "job": "leader"
  }
  }

  ngOnInit(): void {
    this.apiprod.getAllProd().subscribe(
      (d) => {
        this.prodlistapi = d;
        this.products = this.prodlistapi.data;
        console.log(this.products);
      },
      (e) => {
        console.log(e);
      }
    );
    // this.activeRout.queryParams.subscribe(params => {
    //   console.log(params);
    // });
    this.activeRout.queryParamMap.subscribe((p)=>{
      var x=p.get('page');
      //console.log(x);  
    });
    
  }
  page2(){
    this.apiprod.getAllPerPage().subscribe(
      (d) => {
        this.prodlistapi = d;
        this.products = this.prodlistapi.data;
        //console.log(this.products);
      },
      (e) => {
        console.log(e);
      }
    );
  }
  getById(d){
console.log(d);
  }
  addProd(){
    this.apiprod.addProd(this.prodObj).subscribe((d)=>{
      console.log(d);
      
    },
    (e)=>{
      console.log(e);
    },
    ()=>{
      console.log("doneeee");
      
    }
    )
  }
  
}
