import { Component, OnInit } from '@angular/core';

import { Dish } from '../Shared/dish';
import { DISHES } from '../Shared/dishes';
import { DishService } from '../services/dish.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  


  constructor(private dishService: DishService) { }
  
 dishes: Dish[] | any;

  ngOnInit(): void {

    this.dishService.getDishes().subscribe(dishes => this.dishes = dishes);

    
  }

//  dishes: Dish[] = DISHES;


  selectedDish: Dish | any;

  onSelect(dish: Dish) {
  
    this.selectedDish = dish;
    alert(JSON.stringify(this.selectedDish));
  }


}
