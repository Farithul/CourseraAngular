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
    return Promise.resolve(LEADERS);
  }
  
  getFeaturedLeader(): Promise<leader> {
    return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);
    
  }
}
