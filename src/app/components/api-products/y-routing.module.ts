import { HomeComponent } from './../home/home.component';
import { CommonModule } from '@angular/common';
import { AddprodComponent } from './../addprod/addprod.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"addproduct",component:AddprodComponent},
  {path:'**',redirectTo:'productsapi/home',pathMatch:'full'}  
];

@NgModule({
  declarations:[],
  imports: [CommonModule,RouterModule.forChild(routes)],
  //exports: [RouterModule]
})
export class YRoutingModule { }
