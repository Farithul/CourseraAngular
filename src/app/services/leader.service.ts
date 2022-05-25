import { Injectable } from '@angular/core';
import { leader } from '../Shared/leader';
import { LEADERS } from '../Shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  leaders: leader[] = LEADERS;


  getLeaders(): Promise<leader[]> {
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(LEADERS), 2000);
    });
  }
  
  
  getFeaturedLeader(): Promise<leader> {
    return  new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(LEADERS.filter((leader) => leader.featured)[0]), 2000);
    });
    
  }
}
