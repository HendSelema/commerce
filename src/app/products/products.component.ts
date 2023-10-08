import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  catProduct:any[]=[];
  constructor(private _DataService:DataService){
  }
 
  ngOnInit(): void {
    this.getProducts();

  }

  getProducts(){
    this._DataService.getData('products').subscribe((response)=>{
      console.log(response.data);
      this.catProduct=response.data
      
    })
  }
}
