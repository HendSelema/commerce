import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { BrandsComponent } from './brands/brands.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { MycartComponent } from './mycart/mycart.component';
import { WhichlistComponent } from './whichlist/whichlist.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import {BrowserAnimationsModule}from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddHeadersInterceptor } from './add-headers.interceptor';
import { SearchPipe } from './search.pipe';
import { LoaderComponent } from './loader/loader.component';
import { LoaderInterceptor } from './loader.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CategoriesComponent,
    ProductsComponent,
    BrandsComponent,
    NotfoundComponent,
    FooterComponent,
    ProfileComponent,
    MycartComponent,
    WhichlistComponent,
    SignupComponent,
    SigninComponent,
    ProductdetailsComponent,
    MainSliderComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    CheckoutComponent,
    SearchPipe,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
   },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AddHeadersInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
