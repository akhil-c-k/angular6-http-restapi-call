import { Component} from '@angular/core';
import {ApiCallService} from './api-call.service'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private svc:ApiCallService,private http:HttpClient)
    {
      // this.svc.printToConsole("go to service");
     
    }
    ngOnInit()
      {
     
      }
}
