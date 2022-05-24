import { Component, OnInit,Input } from '@angular/core';
import { DishService } from '../services/dish.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Dish } from '../Shared/dish';
import { DISHES } from '../Shared/dishes';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {

    
  dish: Dish[] | any;
 

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location) { }


  ngOnInit(): void {

   // First get the dish id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute : any= Number(routeParams.get('id'));

  // Find the dish that correspond with the id provided in route.
  this.dish = this.dishservice.getDish(productIdFromRoute);
   // alert(this.dish)
  }
  
  
  goBack(): void {
    this.location.back();
  }

}
