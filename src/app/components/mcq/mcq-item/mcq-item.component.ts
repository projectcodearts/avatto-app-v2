import { Component, OnInit } from '@angular/core';
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
  
  maximumPages = 3;
  data:any;
  constructor(private _mcq: McqService,public navCtrl: NavController,private httpClient: HttpClient,private route: ActivatedRoute) {
    this.loadUsers();
   }
  loadUsers(infiniteScroll?) {
    let pid = this.route.snapshot.paramMap.get('id');
    this.httpClient.get(`https://avatto.in/wp-json/avatto/v2/mcq/${pid}/${this.page}`)
    .subscribe(res => {
      this.data = JSON.stringify(res['results']);
      this.users = JSON.parse(this.data);
      console.log(res['results']);
      this.users = this.users.concat(res['results']);
      if (infiniteScroll) {
        infiniteScroll.target.complete();
      }
    })
  }
  loadMore(infiniteScroll) {
    this.page++;
    this.loadUsers(infiniteScroll);
 
    if (this.page === this.maximumPages) {
      infiniteScroll.target.disabled = true;
    }
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

  }

}
