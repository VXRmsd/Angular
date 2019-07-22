import { Component, OnInit } from '@angular/core';
import{Product} from './product'

@Component({
  selector: 'app-product-entry',
  templateUrl: './product-entry.component.html',
  styleUrls: ['./product-entry.component.css']
})
export class ProductEntryComponent implements OnInit {

  done=false

  productArray:Product[]= <any> <Product[]> []

  myColor='red'
  myFont='bold'

  // myStyle={'color': this.myColor, 'font-weight':this.myFont}

  constructor() { }

  ngOnInit() {
  }
 
  saveProduct(pid,pname) {

    // console.log(pid,pname)

    let product = new Product(pid,pname)

    console.log(product)

    this.productArray.push(product)
  }

  // updateStyle(){

  //   this.myStyle={'color': this.myColor, 'font-weight':this.myFont}

  // }
}
