import { Component, OnInit,Pipe, PipeTransform } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { ActivatedRoute,Router } from '@angular/router';
import { SyllabusDetailsService } from '../../allServices/syllabus-details.service';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-syllabus-detail',
  templateUrl: './syllabus-details.component.html',
  styleUrls: ['./syllabus-details.component.scss'],
})

export class SyllabusDetailsComponent implements OnInit {
  fetching = true;
  pdfblock = false;
  title: string = "Syllabus";
  sylllabus: any = []; 
  iframe_src:any;
  iframe_src2:any;
  link:any;

  constructor(private sanitizer: DomSanitizer, private _syllabus:SyllabusDetailsService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.fetching = true;
    let id = this.route.snapshot.paramMap.get('id');
    this._syllabus.getsyllabusDetails(id).pipe().subscribe(response=>{
      const data = JSON.stringify(response)
      this.sylllabus = JSON.parse(data);
      this.iframe_src = this.sanitizer.bypassSecurityTrustResourceUrl(this.sylllabus.iframe_src);
      this.iframe_src2 = (this.iframe_src.changingThisBreaksApplicationSecurity);
      this.link = ('https://avatto.in/wp-content/uploads/2020/06/UGC-NET-Paper-1-updated-Syllabus.pdf');
      this.fetching = false;
      this.pdfblock=true;
    });
  }

}
