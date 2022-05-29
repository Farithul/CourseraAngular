import { Component, OnInit } from '@angular/core';
import { Dish } from '../Shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../Shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { leader } from '../Shared/leader';
import { LeaderService } from '../services/leader.service';
import { flyInOut,expand } from '../animations/app.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class HomeComponent implements OnInit {

  dish: Dish[] | any;
  promotion: Promotion[] | any;
  leader: leader | any;

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderservice: LeaderService) { }

  ngOnInit() : void{

    this.leaderservice.getFeaturedLeader().subscribe((data: any)=>{
      this.leader = data;
      //alert(JSON.stringify(this.leader));
    })
    

    this.dishservice.getFeaturedDish().subscribe((data: any)=>{
      this.dish = data;
    })

    
    this.promotionservice.getFeaturedPromotion().subscribe((data: any)=>{
      this.promotion = data;
      
    })
  }
}


