import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  catData:any[]=[];
  catBrand:any[]=[];
  catProduct:any[]=[];
  searchValue:string='';
constructor(private _DataService:DataService, private _CartService:CartService){}
 
ngOnInit(): void {
  this.getCategory(); 
  this.getProducts();
  this.getbrands();
}

addToCart(productId:string){
this._CartService.addToCard(productId).subscribe({
  next:(response)=>{console.log(response)
  if(response.status == "success"){
    this._CartService.numberOfCartItem.next(response.numOfCartItems)
    Swal.fire({
      icon: 'success',
      text: response.message,
    })
  }
  },
  error:(err)=>{console.log(err)}
})
}

getCategory(){
  this._DataService.getData('categories').subscribe((response)=>{
    console.log(response.data);
    this.catData=response.data
    
  })
}
getbrands(){
  this._DataService.getData('brands').subscribe((response)=>{
    console.log(response.data);
    this.catBrand=response.data.slice(0,4)
    
  })
}
getProducts(){
  this._DataService.getData('products').subscribe((response)=>{
    console.log(response.data);
    // this.catProduct=response.data.slice(0,4)
    this.catProduct=response.data
    
  })
}

customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  autoplay:true,
  navSpeed: 500,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 4
    }
  },
  nav: true
}

}
