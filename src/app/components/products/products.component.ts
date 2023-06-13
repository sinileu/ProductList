import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  result: any
  ProductDetails: any
  ImageLink: any = []

  constructor( private rest: RestService, private sanitizer: DomSanitizer ) { }

  ngOnInit(): void {
    this.productDetails()
  }

  productDetails() {
    this.rest.getProducts()
    .subscribe((res) => {
      if(res != null) {
        this.result = res
        // console.log(this.result)
        // debugger
        this.ProductDetails = this.result
      }
      else {
        console.log('No data found')
      }
    },
    (error) => {
      console.log('Something went wrong')
      console.log(error)
    })
  }

}
