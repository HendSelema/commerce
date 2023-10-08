import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit {

cartDetails:any;
cartNum:number=0;

constructor(private _CartService:CartService){

}

ngOnInit(): void {
  this.getCard()
  this._CartService.numberOfCartItem.subscribe({
    next:(response)=>{console.log(response)
      this.cartNum=response;
    }
  })
}
// mathod


 

getCard(){
  this._CartService.getLoggedUserCart().subscribe({
    next:(response)=>{
      this.cartDetails=response.data
      console.log(response.data)}
  })
}
 
removeItem(productId:string){
  this._CartService.removeCartItem(productId).subscribe({
    next:(response)=>{console.log(response)
      // this.getCard();
      // or
      this.cartDetails=response.data
    },
    error:(err)=>{console.log(err)}
  })
}

updataItem(productId:string,count:number){
this._CartService.updateCartItem(productId,count).subscribe({
  next:(response)=>{console.log(response)
   // this.getCard();
      // or
      this.cartDetails=response.data 
  },
  error:(err)=>{console.log(err)},
})

}
}
