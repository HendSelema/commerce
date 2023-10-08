import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  isLogin:boolean=false;
  cartNum:number=0;
constructor(private _AuthService:AuthService, private _CartService:CartService){

  _CartService.numberOfCartItem.subscribe({
    next:(response)=>{console.log(response)
      this.cartNum=response;
    }
  })

  _AuthService.userData.subscribe({
    next:()=>{
        if(_AuthService.userData.getValue() !==null){
            this.isLogin=true;
        }else{
            this.isLogin=false;
}
    }
  })
}

logout(){
  this._AuthService.logOut()
}

}
