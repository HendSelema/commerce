import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit{
  brandData:any[]=[];
  
constructor(private _DataService:DataService){
}

ngOnInit(): void {
  this.getbrands();

}

getbrands(){
  this._DataService.getData('brands').subscribe((response)=>{
    console.log(response.data);
    this.brandData=response.data
    
  })
}
}
