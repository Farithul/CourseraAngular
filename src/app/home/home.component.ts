import { Component, OnInit } from '@angular/core';
import { Dish } from '../Shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../Shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { leader } from '../Shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish[] | any;
  promotion: Promotion[] | any;
  leader: leader | any;

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderservice: LeaderService) { }

  ngOnInit() : void{

    this.leader = this.leaderservice.getFeaturedLeader();


    
    this.dishservice.getFeaturedDish()
    .then(dishes => this.dish = dishes)

    this.promotionservice.getFeaturedPromotion()
    .then(promo => this.promotion = promo)

    
    this.leaderservice.getFeaturedLeader()
    .then(leader => this.leader = leader)
  }
}


