import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; //should come automatically otherwise add manually
import { of,pipe } from 'rxjs';
import {filter} from 'rxjs/operators';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  _http:HttpClient

  constructor(http:HttpClient) { 

    this._http=http
  }


  getProductList(){

  //  return this._http.get('http://localhost:4200/assets/product.json')

  const stream=of(1,2,3,4,5,6)
  const pipe1=pipe(
    filter((num:number) =>
     { return  (num%2==0) 
    }),
    map(num => num * num)
  )

  const obs=pipe1(stream)
  obs.subscribe(v1 => {
    console.log(v1)
  })
  }
}
