import { Component, OnInit,ElementRef, Renderer2, ViewChild } from '@angular/core';
import { McqService } from '../../../allServices/mcq.service';
import { HttpClient } from '@angular/common/http';

import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { pid } from 'process';
@Component({
  selector: 'app-mcq-item',
  templateUrl: './mcq-item.component.html',
  styleUrls: ['./mcq-item.component.scss'],
})
export class McqItemComponent implements OnInit {

  mcqdata:any;
  fetching = false;
  users = [];
  page = 1;
  lStart:any =0;
  lEnd:any = this.lStart + 1;
  nextBtnActive : any = "false";
  maximumPages = 3;
  data:any;
  prev:any="false";
  constructor(private _mcq: McqService,public navCtrl: NavController,
    private httpClient: HttpClient,private route: ActivatedRoute,private el: ElementRef,private renderer: Renderer2) {
    this.loadUsers();
   }
  loadUsers(infiniteScroll?) {
    let pid = this.route.snapshot.paramMap.get('id');
    this.httpClient.get(`https://avatto.in/wp-json/avatto/v2/mcq/${pid}/${this.page}`)
    .subscribe(res => {
      this.data = JSON.stringify(res['results']);
      this.users = JSON.parse(this.data);
      //console.log(res['results']);
      this.users = this.users.concat(res['results']);
     
    })
  }
  
  ngOnInit() {
    this.mcqdata=this._mcq.getmcqsetup();

    this.fetching = true;
    let id = this.route.snapshot.paramMap.get('id');
    this.httpClient.get(`https://avatto.in/wp-json/avatto/v2/mcq-max/`+id)
    .subscribe(res => {
      this.data = JSON.stringify(res);
      this.maximumPages = JSON.parse(this.data);
      console.log(this.maximumPages);
      this.fetching = false;
    })

  }

  nextQuestion(questionId,params : number){
    if(this.lStart < this.users.length-1){
      this.lStart = params + 1;
      this.lEnd = this.lStart + 1;
    }
    this.nextBtnActive = "false";
    this.prev = "true";
  }

  submitQuestion(questionId,params : number){
    if(this.lStart < this.users.length-1){
      this.lStart = params + 1;
      this.lEnd = this.lStart + 1;
    }
    this.nextBtnActive = "false";
    this.prev = "true";
  }

  prevQuestion(questionId,params : number){

    if(this.lEnd > 1){
      this.lEnd = parseInt(this.lEnd) - 1;
      this.lStart = parseInt(this.lEnd) - 1;
      console.log(this.lStart);
      this.nextBtnActive = "false";
      this.prev = "true";
      if(this.lStart == 0){
        this.prev = "false";
      }
    }

  }



  selectAnswer(params, questionId,rightChoice,selector,i){
      let className = '';
      let explainClassname = '';
      if(params == rightChoice){
        className = '.ans'+params+i+questionId;
        const btnElement = (<HTMLElement>this.el.nativeElement).querySelector(className); 
        this.renderer.setStyle(
          btnElement,
          'background-color',
          '#59ad19'
        );
        explainClassname = '.answare-back'+questionId;  
        const expElement = (<HTMLElement>this.el.nativeElement).querySelector(explainClassname); 
        this.renderer.setStyle(
          expElement,
          'display',
          'block'
        );  

      }

      else{
        className = '.ans'+params+i+questionId;
        const btnElement = (<HTMLElement>this.el.nativeElement).querySelector(className); 
        this.renderer.setStyle(
          btnElement,
          'background-color',
          '#EC1707'
        );
      }
      this.nextBtnActive = "true";
  }


}
