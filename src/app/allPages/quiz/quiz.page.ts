import { Component, OnInit} from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {
  
  title:string = "Quiz";
  constructor(private storage: Storage) { }

  ngOnInit() {

  }
  
  ionViewDidLeave(){
    console.log('page leave')
    localStorage.removeItem("timer");
    this.storage.remove('timer');
  }
  
}
