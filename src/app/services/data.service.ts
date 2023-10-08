import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class DataService {
baseUrl:string=`https://ecommerce.routemisr.com/api/v1/`
  constructor(private _HttpClient:HttpClient) { }

getData(dataType:string):Observable<any>{
  return this._HttpClient.get(this.baseUrl+dataType)
}
getSubCategory(dataType:string):Observable<any>{
  return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/subcategories`)
}

getProductDetails(id:string):Observable<any>{
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
}

}
