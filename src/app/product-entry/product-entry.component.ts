import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-entry',
  templateUrl: './product-entry.component.html',
  styleUrls: ['./product-entry.component.css']
})
export class ProductEntryComponent implements OnInit {

  done = false

  text = 'welcome to expertzlab'
  text1 = 'welcome to gofree labs'

  text2 = 'CHilds play'

  productArray: Product[] = <any><Product[]>[]

  myColor = 'red'
  myFont = 'bold'

  blueBold = 'blueBold'
  bluebolddisabled = 'blueBoldDisabled'

  disabled = true

  condition = true

  _prodService: ProductService;
  _productList;
  error_messages = [];



  myStyle = { 'color': this.myColor, 'font-weight': this.myFont }

  constructor(prodService: ProductService) {
    this._prodService = prodService
  } 

  ngOnInit() {
    this._prodService.getProductList()
      .subscribe(

        res => {
          this._productList = res
        },
        err => {
          this.error_messages.push(err)
          this.error_messages.push('server error:plz retry again')
          console.log('errors'+err)
        },

        () => {
          console.log('stream completed')
        }
      )
      // console.log(this._productList)
 }

}


