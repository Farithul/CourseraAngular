import { Injectable } from '@angular/core';
import { leader } from '../Shared/leader';
import { LEADERS } from '../Shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  leaders: leader[] = LEADERS;

  getLeaders() {
    return this.leaders;
  }

  
  getFeaturedLeader(): leader {
    return LEADERS.filter((leader) => leader.featured)[0];
  }
}
