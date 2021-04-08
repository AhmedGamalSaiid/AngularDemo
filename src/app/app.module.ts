import { ApiProductsComponent } from './components/api-products/allproducts/api-products.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/mainLayout/header/header.component';
import { FooterComponent } from './components/mainLayout/footer/footer.component';
import { ParentCartComponent } from './components/Orders/parent-cart/parent-cart.component';
import { ProductsComponent } from './components/products/products.component';
import { ChildCartComponent } from './components/Orders/child-cart/child-cart.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdApiComponent } from './components/api-products/prod-api/prod-api.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddprodComponent } from './components/addprod/addprod.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ParentCartComponent,
    ProductsComponent,
    ChildCartComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    ApiProductsComponent,
    ProdApiComponent,
    UserLoginComponent,
    AddprodComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
