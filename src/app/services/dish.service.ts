import { Injectable } from '@angular/core';
import { of,Observable,throwError } from 'rxjs';
import { delay,map } from 'rxjs/operators';
import { Dish } from '../Shared/dish';
import { DISHES } from '../Shared/dishes';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../Shared/baseUrl';


@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient) { }

  items: Dish[] = [];
  
  addToComments(Dish: Dish) {
    this.items.push(Dish);
  }

  getRecentComments() {
    return this.items;
  }

  getDishes(): Observable<Dish[]> {
   // return of(DISHES).pipe(delay(2000));
   return this.http.get<Dish[]>(baseURL + 'dishes');
  }

  getDishIds(): Observable<string[] | any> {
   // return of(DISHES.map(dish => dish.id ));
   return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)));
  }

  getDish(id: any): Observable<Dish> {
    //return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
      //  setTimeout(() => resolve(DISHES.filter((dish) => (dish.id == id))[0]), 2000);
    //});
    return this.http.get<Dish>(baseURL + 'dishes/' + id);
  }


  getFeaturedDish(): Observable<Dish> {
  //  return  new Promise(resolve=> {
      // Simulate server latency with 2 second delay
    //    setTimeout(() => resolve(DISHES.filter((dish) => dish.featured)[0]), 2000);
    //});

    return this.http.get<Dish[]>(baseURL + 'dishes?featured=true').pipe(map(dishes => dishes[0]));
  }
}
