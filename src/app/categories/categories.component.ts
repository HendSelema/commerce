import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  catData:any[]=[];
  supcatData:any[]=[];

  constructor(private _DataService:DataService){
  }

  ngOnInit(): void {
    this.getCategory();
    this.getsupCategory();
  }
  getCategory(){
    this._DataService.getData('categories').subscribe((response)=>{
      console.log(response.data);
      this.catData=response.data
      
    })
  }
  getsupCategory(){
    this._DataService.getSubCategory(`https://route-ecommerce.onrender.com/api/v1/subcategories`).subscribe((response)=>{
      console.log(response.data);
      this.supcatData=response.data.slice(0,10)
      
    })
  }
}
