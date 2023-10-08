import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';
import { ProductsComponent } from './products/products.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { WhichlistComponent } from './whichlist/whichlist.component';
import { MycartComponent } from './mycart/mycart.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { authGuard } from './auth.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [

  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home" ,canActivate:[authGuard] ,component:HomeComponent},
  {path:"category",canActivate:[authGuard] , component:CategoriesComponent},
  {path:"brand",canActivate:[authGuard] , component:BrandsComponent},
  {path:"products",canActivate:[authGuard] , component:ProductsComponent},
  {path:"details/:id",canActivate:[authGuard] , component:ProductdetailsComponent},
  {path:"cart",canActivate:[authGuard] , component:MycartComponent},
  {path:"forgotPassword", component:ForgotPasswordComponent},
  {path:"resetPassword", component:ResetPasswordComponent},
  {path:"signin",component:SigninComponent},
  {path:"whichlist",canActivate:[authGuard] , component:WhichlistComponent},
  {path:"checkout",canActivate:[authGuard] , component:CheckoutComponent},
  {path:"signup",component:SignupComponent},
  {path:"profile",canActivate:[authGuard] , component:ProfileComponent},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
