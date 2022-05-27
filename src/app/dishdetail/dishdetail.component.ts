import { Component, OnInit,Input } from '@angular/core';
import { DishService } from '../services/dish.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Dish } from '../Shared/dish';
import { DISHES } from '../Shared/dishes';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

    
 dish: Dish[] | any;
 dishIds: string[] | any;
  prev: string | any;
  next: string | any;
  

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location) { }


  ngOnInit(): void {

   // First get the dish id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const IdFromRoute : any= Number(routeParams.get('id'));

  // Find the dish that correspond with the id provided in route.
 // this.dish = this.dishservice.getDish(IdFromRoute);
 
 this.dish = this.dishservice.getDish(IdFromRoute)
 .then(dish => this.dish = dish);
 

 this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.route.params.pipe(switchMap((params: Params) => this.dishservice.getDish(params['id'])))
    .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });


  }
  setPrevNext(dishId:any) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }
  
  
  goBack(): void {
    this.location.back();
  }

}
