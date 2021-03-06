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
export class DishService {

  constructor(private http: HttpClient,private processHTTPMsgService: ProcessHTTPMsgService) { }

  items: Dish[] = [];
  
  addToComments(Dish: Dish) {
    this.items.push(Dish);
  }

  getRecentComments() {
    return this.items;
  }

  getDishes(): Observable<Dish[]> {
   // return of(DISHES).pipe(delay(2000));
   return this.http.get<Dish[]>(baseURL + 'dishes')
   .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getDishIds(): Observable<string[] | any> {
   // return of(DISHES.map(dish => dish.id ));
   return this.getDishes()
   .pipe(map(dishes => dishes.map(dish => dish.id)))
   .pipe(catchError(this.processHTTPMsgService.handleError));
   
  }

  getDish(id: any): Observable<Dish> {
    //return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
      //  setTimeout(() => resolve(DISHES.filter((dish) => (dish.id == id))[0]), 2000);
    //});
    return this.http.get<Dish>(baseURL + 'dishes/' + id)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  putDish(dish: Dish): Observable<Dish> {
   
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put<Dish>(baseURL + 'dishes/' + dish.id, dish, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));

  }

  
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
 


  getFeaturedDish(): Observable<Dish> {
  //  return  new Promise(resolve=> {
      // Simulate server latency with 2 second delay
    //    setTimeout(() => resolve(DISHES.filter((dish) => dish.featured)[0]), 2000);
    //});

    return this.http.get<Dish[]>(baseURL + 'dishes?featured=true').pipe(map(dishes => dishes[0]))
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
