import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; //should come automatically otherwise add manually
import { of,pipe, interval } from 'rxjs';
import {filter, tap} from 'rxjs/operators';
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

   return this._http.get('http://localhost:4200/assets/product.json')
   .pipe(
     map((data:any[]) => {
        const ndata = []
        data.forEach((el) => {
            console.log('El:',el)
            const sid = 'S-' + el.id
            const sname = 'S-' + el.name
            // data.splice(el,1)
            ndata.push({
                'id': sid,
                'name': sname
            })
        })
            return ndata
     }
     ),
    tap((data)  => {
        console.log('received from server:',data)
    })
    
  ) 

  }  }
