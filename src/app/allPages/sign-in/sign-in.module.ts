import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignInPageRoutingModule } from './sign-in-routing.module';

import { SignInPage } from './sign-in.page';
import { LoginComponent } from 'src/app/components/login/login.component';
import { CommonService } from 'src/app/allServices/common.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SignInPageRoutingModule
  ],
  declarations: [SignInPage, LoginComponent],
  providers: [],
})
export class SignInPageModule {}
