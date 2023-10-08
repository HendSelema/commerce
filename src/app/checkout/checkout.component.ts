import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  productId:string='';

constructor(private _CartService:CartService){}

ngOnInit(): void {
  this._CartService.getLoggedUserCart().subscribe({
    next:(response)=>{
      console.log(response.data._id)
      this.productId=response.data._id
    }
  })
}


navigateToPage(url:string){
  window.location.href=url
}

paymentForm:FormGroup=new FormGroup({
  details: new FormControl(null,[Validators.required]),
  phone: new FormControl(null,[Validators.required]),
  city: new FormControl(null,[Validators.required]),
})

paymentFn(paymentForm:FormGroup){
  console.log(paymentForm);
  this._CartService.onlinePayment(this.productId,paymentForm.value).subscribe({
    next:(response)=>{
      if(response.status=='success'){
        this.navigateToPage(response.session.url)
      }
    }
  })
  
}


}
