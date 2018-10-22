import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  products: Array<any>
  selectedProduct: any;
  productFound: boolean = false;

  constructor(public navCtrl: NavController, public dataService: DataServiceProvider,
    public barcodeScanner: BarcodeScanner, public toast: Toast) {
    console.log('home page constructor')



  }

  ngOnInit() {
    console.log('this.dataService.getProducts()...')
    console.log(this.dataService.getProducts())

  }

  scan() {
    this.selectedProduct = {};
    this.barcodeScanner.scan().then((barcodeData) => {
      this.selectedProduct = this.dataService.getProducts().find(product => product.plu === barcodeData.text);
      if (this.selectedProduct !== undefined) {
        this.productFound = true;
      } else {
        this.productFound = false;
        this.toast.show( barcodeData.text, '5000', 'center').subscribe(
          toast => {
            console.log(toast);
          }
        );
      }
    }, (err) => {
      this.toast.show(err, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    });
  }



}
