import { Component, OnInit } from '@angular/core';
import { PracticeQuestionDetailsServicesService } from '../../allServices/practice-question-details-services.service';
import { Storage } from '@ionic/storage';


import { ActivatedRoute,Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-practice-question-details-com',
  templateUrl: './practice-question-details.component.html',
  styleUrls: ['./practice-question-details.component.scss'],
})
export class PracticeQuestionDetailsComponent implements OnInit {
  fetching = false;
  practiceQs:any=[];
  uemail:any;
  constructor(private _practiceqsdts:PracticeQuestionDetailsServicesService,private route: ActivatedRoute,private router:Router,private storage: Storage,private http:HttpClient) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.storage.get('userInfo').then((val) => {
      let data = JSON.stringify(val);
      let user_data = JSON.parse(val);
      this.uemail = user_data.user_email;
    });

    this.http.get('http://avatto.in/wp-json/avatto/v2/paid-check/?id='+id+'&ue='+this.uemail).subscribe(res=>{
      console.log(res);
    })

    this.fetching = true;
    this._practiceqsdts.getPracticeQuestionDetails(id).pipe().subscribe(response=>{
      console.log(response);
      this.practiceQs = response;
      
      if(this.practiceQs.length == 0){
        console.log('no response');
        this.router.navigate(['/mcq', id]);
      }
      this.fetching = false;
    })
  }

  
  toggleAccordian(event, index) {
    var element = event.target.parentElement;
    element.classList.toggle("active");
    if(this.practiceQs[index].isActive) {
      this.practiceQs[index].isActive = false;
    } else {
      this.practiceQs[index].isActive = true;
    }      
    var details_back = element.nextElementSibling;
    if (details_back.style.maxHeight) {
      details_back.style.maxHeight = null;
    } else {
      details_back.style.maxHeight = details_back.scrollHeight + "px";
    }
  }

  

}
