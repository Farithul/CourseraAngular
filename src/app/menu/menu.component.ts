import { Component, OnInit,Inject } from '@angular/core';

import { Dish } from '../Shared/dish';
import { DISHES } from '../Shared/dishes';
import { DishService } from '../services/dish.service';
import { flyInOut,expand } from '../animations/app.animations';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})

export class MenuComponent implements OnInit {

  


  constructor(private dishService: DishService,@Inject('baseURL') private baseURL: string) { }
  
 dishes:  Dish[] | any; 
 errMess: string | any;

  ngOnInit(): void {

   // this.dishService.getDishes().
    //subscribe(dishes => this.dishes = dishes,);

    this.dishService.getDishes().
    subscribe({
      next: (dishes) => this.dishes = dishes,
      error: (errMess) => this.errMess(errMess),
      complete: () => console.info('complete') 
  })

  }

//  dishes: Dish[] = DISHES;


  selectedDish: Dish | any;

  onSelect(dish: Dish) {
  
    this.selectedDish = dish;
    alert(JSON.stringify(this.selectedDish));
  }


}
