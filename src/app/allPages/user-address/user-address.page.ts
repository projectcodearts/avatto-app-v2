import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../allServices/products.service';
import { Platform, LoadingController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.page.html',
  styleUrls: ['./user-address.page.scss'],
})
export class UserAddressPage implements OnInit {
   customerInfo :any = [];
   userAddress = {
    billing: {
      first_name: "",
      last_name: "",
      address_1: "",
      address_2: "",
      city: "",
      state: "",
      postcode: "",
      country: "",
      email: "",
      phone: ""
    }
  };
  constructor(public platform: Platform,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public _products: ProductsService,
    private storage: Storage
  ) { }

  ngOnInit() {
    this._products.getCustomer("1").then(data => {
      let item = data[0];
      this.customerInfo = item;
      console.log(this.customerInfo);
    });
  }

  async updateAddress(){
    console.log("hi");
    let loading = await this.loadingCtrl.create({
			cssClass: 'my-custom-class',
			message: 'Please wait...',
		});
    loading.present();
    let shillpingAddress = this.userAddress.billing;
    this.userAddress['shipping'] = shillpingAddress;
    
    this._products.updateUserAddress(this.userAddress,"1").subscribe(async (resp) => {
      loading.dismiss();
      const toast = await this.toastCtrl.create({
        message: 'Address has been successfully updated.',
        duration: 2000
      });
      toast.present();
    }, async (err) => {
        loading.dismiss();
        const toast = await this.toastCtrl.create({
          message: 'failed to update order.',
          duration: 2000
        });
        toast.present();
    });   
  }
}
