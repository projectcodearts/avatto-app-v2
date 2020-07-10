import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
import { CategoryServicesService } from 'src/app/allServices/category-services.service';
import { SyllabusComponent } from 'src/app/components/syllabus/syllabus.component';
import { EligiblityComponent } from 'src/app/components/eligiblity/eligiblity.component';
import { PapersComponent } from 'src/app/components/papers/papers.component';
import { MocktestComponent } from 'src/app/components/mocktest/mocktest.component';
import { QuizComponent } from 'src/app/components/quiz/quiz.component';
import { SyllabusService } from 'src/app/allServices/syllabus.service';
import { PapersService } from 'src/app/allServices/papers.service';
import { MocktestService } from 'src/app/allServices/mocktest.service';
import { EligiblityService } from 'src/app/allServices/eligiblity.service';
import { FeaturedCategoryComponent } from 'src/app/components/featured-category/featured-category.component';
import { CouponComponent } from 'src/app/components/coupon/coupon.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage, 
    SearchbarComponent, 
    FeaturedCategoryComponent,
    CouponComponent,
    SyllabusComponent,
    EligiblityComponent,
    PapersComponent,
    MocktestComponent,
    QuizComponent
  ],
  providers: [CategoryServicesService, SyllabusService, EligiblityService, PapersService, MocktestService],
})
export class HomePageModule {}
