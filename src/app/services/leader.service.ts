import { Injectable } from '@angular/core';
import { leader } from '../Shared/leader';
import { LEADERS } from '../Shared/leaders';
import { of,Observable } from 'rxjs';
import { delay,map,catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../Shared/baseURL';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient,private processHTTPMsgService: ProcessHTTPMsgService) { }

  leaders: leader[] = LEADERS;


  
  getLeaders(): Observable<leader[]> {
    // return of(DISHES).pipe(delay(2000));
    return this.http.get<leader[]>(baseURL + 'leadership')
    .pipe(catchError(this.processHTTPMsgService.handleError));
   }
  
  getFeaturedLeader(): Observable<leader> {

      // Simulate server latency with 2 second delay
       // setTimeout(() => resolve(LEADERS.filter((leader) => leader.featured)[0]), 2000);
       
  
      return this.http.get<leader[]>(baseURL + 'leadership?featured=true').pipe(map(leaders => leaders[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
    }
    
  }

  

