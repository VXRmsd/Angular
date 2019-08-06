import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; //should come automatically otherwise add manually
import { of,pipe, interval } from 'rxjs';
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

    interval(1000).pipe(
      
      filter(num => (num %2) === 0),
      map(num => num * num)
    
      ).subscribe(
      val => {
        console.log(val)
    }
  )
  }
}
