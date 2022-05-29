import { Injectable } from '@angular/core';
import { of,Observable } from 'rxjs';
import { delay,map,catchError } from 'rxjs/operators';
import { Dish } from '../Shared/dish';
import { Feedback } from '../Shared/feedback';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../Shared/baseURL';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient,private processHTTPMsgService: ProcessHTTPMsgService) { }

  
  SubmitFeedback(feedback : Feedback): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post(baseURL + 'feedback/', JSON.stringify(feedback), httpOptions)
    .pipe(
      catchError(this.processHTTPMsgService.handleError)
    )
  }
 
}
