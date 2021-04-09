import { AuthGuard } from './components/user/auth.guard';
import { AddprodComponent } from './components/addprod/addprod.component';
import { ApiProductsComponent } from './components/api-products/allproducts/api-products.component';
import { FormsModule } from '@angular/forms';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { ProdApiComponent } from './components/api-products/prod-api/prod-api.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ParentCartComponent } from './components/Orders/parent-cart/parent-cart.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact us', component: ContactComponent },
  { path: 'about us', component: AboutComponent },
  { path: 'products', component: ParentCartComponent,canActivate:[AuthGuard] },
  { path: 'products/:pID', component: ProductsComponent },
  { path: 'productsapi', component: ApiProductsComponent },
  { path: 'productsapi/:pID', component: ProdApiComponent },
  {path:'login',component:UserLoginComponent},
  {path:'addproduct',component:AddprodComponent,canActivate:[AuthGuard]},
  {
    path: 'user',
    loadChildren: () =>
      import('./components/user/user.module').then((m) => m.UserModule),
      canActivate:[AuthGuard]
  },
 // {path:'productsapi',loadChildren:()=>import('./components/api-products/y-routing.module').then((m)=>m.YRoutingModule)},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
