import { Component, OnInit } from '@angular/core';
import { MenuServices } from 'src/app/allServices/menu.service';
import { ApiService } from 'src/app/allServices/api.service';
import { ToastController, AlertController } from '@ionic/angular';

import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  user = this.api.getCurrentUser();
  loggedin:any="false";
  menu: any[];
  mainlogo: string = "assets/images/avatto-web-white.png";
  constructor(
    private _menu: MenuServices, 
    private api: ApiService,
    private toastCtrl: ToastController, 
    private alertCtrl: AlertController,
    private platform: Platform
    ) { }

  ngOnInit() {
    this.menu = this._menu.getmenu();
    this.user.subscribe(user => {
      if (user) {
        this.loggedin = "true";
      } else {
        this.loggedin = "false";
        console.log('not logged in');
      }
    });
  }
  async logout() {
    console.log('here');
    this.api.logout();
    const toast = await this.toastCtrl.create({
      message: 'Log Out SuccessFully',
      duration: 2000
    });
    toast.present();
  }


  /*async checkCodePush(){
    this.codePush.sync({}, (progress)=>{

    }).subscribe(async (status)=>{
      if(status == SyncStatus.CHECKING_FOR_UPDATE){
        const alert = await this.alertCtrl.create({
          cssClass: 'my-custom-class',
          header: 'Alert',
          message: 'Cheaking for Update...',
          buttons: [
            {
              text: 'Cancle',
              role: 'cancel',
            },
            {
              text: 'Update',
              handler: () => {
                this.checkCodePush();
            }
          }
            
          ]
        });
       
        await alert.present();
        
      }
      
      
      if(status == SyncStatus.UP_TO_DATE){
        const alert = await this.alertCtrl.create({
          cssClass: 'my-custom-class',
          header: 'Alert',
          message: 'App Upto Date',
          buttons: ['OK']
        });
        
        await alert.present();
        
        
      }
      if(status == SyncStatus.UPDATE_IGNORED){
        const alert = await this.alertCtrl.create({
          cssClass: 'my-custom-class',
          header: 'Alert',
          message: 'App Update Ignore',
          buttons: ['OK']
        });
        
        await alert.present();
        

      }
      if(status == SyncStatus.ERROR){
        const alert = await this.alertCtrl.create({
          cssClass: 'my-custom-class',
          header: 'Alert',
          message: 'App Update Error',
          buttons: ['OK']
        });
        
        await alert.present();
        
      }
  
    })
  }*/


}
