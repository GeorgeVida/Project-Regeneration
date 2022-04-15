import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {
 
 result:any;
  response2: any;
  descr:any;

  constructor(private router :Router , private active : ActivatedRoute,private service:ServiceService) { }

  ngOnInit(): void {
    this.result = history.state;
    this.descr = this.requestData(this.result.data.id)
  }


  requestData(id:any) {
    this.service.getData2(id).subscribe(
  
      data => this.descr = data
  
    );
}
}

