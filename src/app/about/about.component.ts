import { Component, OnInit } from '@angular/core';
import { leader } from '../Shared/leader';
import { LEADERS } from '../Shared/leaders';
import { LeaderService } from '../services/leader.service';
import { flyInOut,expand } from '../animations/app.animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class AboutComponent implements OnInit {

  constructor(private leaderservice: LeaderService) { }

  leaders: leader | any;
  ngOnInit(): void {

    this.leaderservice.getLeaders()
    .then(leaders => this.leaders = leaders);

  }

// leaders: leader[] = LEADERS;


}
