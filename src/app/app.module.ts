import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdminregistrationComponent } from './adminregistration/adminregistration.component';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { ListComponent } from './list/list.component';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminregistrationComponent,
    CategoryComponent,
    LoginComponent,
    ProductComponent,
    RegistrationComponent,
    MainComponent,
    ListComponent,
    CartComponent,
    SearchComponent,
    HomeComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
