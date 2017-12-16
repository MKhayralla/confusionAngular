import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service' ;
import { LeadersService } from '../leaders.service' ;
import { Leader } from '../leader' ;

@Component({
  selector: 'app-leader',
  templateUrl: './leader.component.html',
  styleUrls: ['./leader.component.css']
})
export class LeaderComponent implements OnInit {

  constructor(private ConfigService : ConfigService ,
              private LeadersService : LeadersService) { }
  leaders : Leader[] ;

  ngOnInit() {
    this.fetchLeaders() ;
  }
  fetchLeaders() : void {
    this.LeadersService.getLeaders()
    .subscribe((leaders) => {
      this.leaders = leaders ;
    })
  }

}
