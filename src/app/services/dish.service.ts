import { Injectable } from '@angular/core';

import { Dish } from '../Shared/dish';
import { DISHES } from '../Shared/dishes';


@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDish(id: any): Dish {
    
    return DISHES.filter((dish) => (dish.id == id))[0];
  }

  getFeaturedDish(): Dish {
    return DISHES.filter((dish) => dish.featured)[0];
  }
}
