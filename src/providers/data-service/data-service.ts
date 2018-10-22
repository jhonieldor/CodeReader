import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {

  products: any

  constructor(public http: HttpClient) {
    console.log('Hello DataServiceProvider Provider');
    this.getListDetails()
  }

  getListDetails() {

    // this.http.get('people.json')
    //   // Call map on the response observable to get the parsed people object
    //   .pipe(map(res => res.json()))
    //   // Subscribe to the observable to get the parsed people object and attach it to the
    //   // component
    //   .subscribe(people => this.people = people);

    this.http.get('assets/data/products.json').subscribe(res => {
      console.log('res...')
      console.log(res)
      this.products = res
      console.log('this.products')
      console.log(this.products)
    })

    // .map((response:Response)=>response.json());
  }

  getProducts() {
    return this.products
  }


}
