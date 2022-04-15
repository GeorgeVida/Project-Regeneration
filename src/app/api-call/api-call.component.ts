import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.scss']
})
export class ApiCallComponent implements OnInit {

  response:any;
  list: any;
 

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.requestData();
    
      
  }

requestData() {
  this.service.getData().subscribe(

    data => this.response = data

  );
  
}
}
