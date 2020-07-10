import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductPagePageRoutingModule } from './product-page-routing.module';

import { ProductPagePage } from './product-page.page';
import { ProductsComponent } from 'src/app/components/products/products.component';
import { ProductItemComponent } from 'src/app/components/products/product-item/product-item.component';
import { TextshortPipe } from 'src/app/allPipes/textshort.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductPagePageRoutingModule
  ],
  declarations: [ProductPagePage, ProductsComponent, ProductItemComponent, TextshortPipe]
})
export class ProductPagePageModule {}
