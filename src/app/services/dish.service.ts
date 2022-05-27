import { Injectable } from '@angular/core';
import { of,Observable,throwError } from 'rxjs';
import { delay,catchError } from 'rxjs/operators';
import { Dish } from '../Shared/dish';
import { DISHES } from '../Shared/dishes';


@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  
  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(2000));
  }

  getDishIds(): Observable<string[] | any> {
    return of(DISHES.map(dish => dish.id ));
  }

  getDish(id: any): Promise<Dish> {
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(DISHES.filter((dish) => (dish.id == id))[0]), 2000);
    });
  }

  //getDish1(id: number): Observable<Dish> {
    //return of(DISHES.filter((dish) => (dish.id == id))[0]).pipe(delay(2000));
  //}

  getFeaturedDish1(): Observable<Dish> {
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
  }
  

  getFeaturedDish(): Promise<Dish> {
    return  new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(DISHES.filter((dish) => dish.featured)[0]), 2000);
    });
  }
}
