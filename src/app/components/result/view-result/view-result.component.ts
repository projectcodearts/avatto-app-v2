import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavController  } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.scss'],
})
export class ViewResultComponent implements OnInit {
  postAns : any = JSON.parse(localStorage.getItem("postAns"))?JSON.parse(localStorage.getItem("postAns")):{};
  questionList : any = JSON.parse(localStorage.getItem("question"))?JSON.parse(localStorage.getItem("question")):[];

  resultSheet : any = [];
  shortResult : any = [];
  ViewDetail : any = "";
  constructor(private storage: Storage,public modalController: ModalController,public nav: NavController) { }

  ngOnInit() {
    let correctChoiceCount : number = 0,incorrectChoiceCount : number = 0,unattended : number = 0 ,timeTaken,score;
    for(var key in this.questionList){
      let result = {};
      result['questionName'] = this.questionList[key]["name"];
      result['explain'] = this.questionList[key]["explain"];
      if(typeof this.postAns[key] === 'undefined'){
        result['userChoice'] = "N/A";
        result['correctChoice'] = "N/A";     
        unattended++  
      } else {
        if(this.postAns[key]["markReviewd"] == "notanswerd"){
          result['userChoice'] = "N/A";
          result['correctChoice'] = "N/A";
          unattended++       
        } else {
          result['userChoice'] = this.postAns[key]["choice"];
          result['correctChoice'] = this.postAns[key]["rightChoice"];
          if(result['userChoice'] == result['correctChoice']){
            correctChoiceCount++;
          } else {
            incorrectChoiceCount++
          }
        }       
      }

      this.resultSheet[key] = result;
    }
    this.shortResult['totQuestion'] = this.questionList.length;
    this.shortResult['correctChoiceCount'] = correctChoiceCount;
    this.shortResult['incorrectChoiceCount'] = incorrectChoiceCount;
    this.shortResult['unattended'] = unattended;
    this.shortResult['timeTaken'] = this.timeConversion();
    localStorage.clear();
  }
  
  timeConversion(){
    let timer,totalTime;
    this.storage.get('timer').then((val) => {
      timer = val;
    });

    this.storage.get('totalTime').then((val) => {
      totalTime = val;
    });
    let totSec = parseInt(totalTime) - parseInt(timer);
    return totSec;
  }

  async checkExplain(explain){
    this.nav.navigateForward(['/explain',{"explain":explain}]);
  }

  
  vewDetails(){
    this.ViewDetail = "true";
  }

}
