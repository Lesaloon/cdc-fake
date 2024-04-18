import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserGridComponent } from './components/user-grid/user-grid.component';
import { IndexComponent } from './pages/index/index.component';
import { ProductComponent } from './pages/product/product.component';
import { UserComponent } from './pages/user/user.component';


import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProductCardComponent,
    ProductGridComponent,
    UserCardComponent,
    UserGridComponent,
    IndexComponent,
    ProductComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
