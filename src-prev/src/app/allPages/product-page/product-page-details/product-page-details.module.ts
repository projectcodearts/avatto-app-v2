import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductPageDetailsPageRoutingModule } from './product-page-details-routing.module';

import { ProductPageDetailsPage } from './product-page-details.page';
import { ProductDetailsComponent } from 'src/app/components/products/product-details/product-details.component';
import { ProductsService } from 'src/app/allServices/products.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductPageDetailsPageRoutingModule
  ],
  declarations: [ProductPageDetailsPage, ProductDetailsComponent],
  providers: [ProductsService]
})
export class ProductPageDetailsPageModule {}
