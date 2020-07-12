import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-quiz-instruction',
  templateUrl: './quiz-instruction.page.html',
  styleUrls: ['./quiz-instruction.page.scss'],
})
export class QuizInstructionPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismissModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
