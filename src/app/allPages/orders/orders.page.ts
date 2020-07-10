import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../allServices/products.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  constructor(public _products: ProductsService,private storage: Storage) { }
  orderList : [];
  ngOnInit() {
    
    this._products.getPastOrders("1").then(data => {
      let item = data[0];
      this.orderList = item;
    });
    
  }

}
