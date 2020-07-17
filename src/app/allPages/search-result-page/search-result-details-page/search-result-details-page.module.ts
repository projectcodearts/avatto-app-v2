import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchResultDetailsPagePageRoutingModule } from './search-result-details-page-routing.module';

import { SearchResultDetailsPagePage } from './search-result-details-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchResultDetailsPagePageRoutingModule
  ],
  declarations: [SearchResultDetailsPagePage]
})
export class SearchResultDetailsPagePageModule {}
