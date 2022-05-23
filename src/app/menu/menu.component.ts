import { Component, OnInit } from '@angular/core';
import { Dish } from '../Shared/dish';
import { DISHES } from '../Shared/dishes';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  


  constructor() { }

  ngOnInit(): void {


    
  }

  dishes: Dish[] = DISHES;


  selectedDish: Dish | any;

  onSelect(dish: Dish) {
  
    this.selectedDish = dish;
    alert(JSON.stringify(this.selectedDish));
  }


}
