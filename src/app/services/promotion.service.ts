import { Injectable } from '@angular/core';
import { leader } from '../Shared/leader';
import { Promotion } from '../Shared/promotion';
import { PROMOTIONS } from '../Shared/promotions';
import { of,Observable } from 'rxjs';
import { delay,map,catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../Shared/baseURL';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient,private processHTTPMsgService: ProcessHTTPMsgService) { }

  


  
  getPromotions(): Observable<Promotion[]> {
    // return of(DISHES).pipe(delay(2000));
    return this.http.get<Promotion[]>(baseURL + 'promotions')
    .pipe(catchError(this.processHTTPMsgService.handleError));
   }


  
  getPromotion(id: any): Observable<Promotion> {
    //return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
      //  setTimeout(() => resolve(DISHES.filter((dish) => (dish.id == id))[0]), 2000);
    //});
    return this.http.get<Promotion>(baseURL + 'promotions/' + id)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  
  getFeaturedPromotion(): Observable<Promotion> {
  
      return this.http.get<Promotion[]>(baseURL + 'promotions?featured=true').
      pipe(map(promotions => promotions[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
    }

}
