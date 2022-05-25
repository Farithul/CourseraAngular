import { Injectable } from '@angular/core';
import { leader } from '../Shared/leader';
import { Promotion } from '../Shared/promotion';
import { PROMOTIONS } from '../Shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  

  getPromotions(): Promise<Promotion[]> {
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(PROMOTIONS), 2000);
    });
  }

  getPromotion(id: any): Promise<Promotion> {
    return new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(PROMOTIONS.filter((Promo) => (Promo.id === id))[0]), 2000);
    });
  }

  getFeaturedPromotion(): Promise<Promotion> {
    return  new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(PROMOTIONS.filter((promo) => promo.featured)[0]), 2000);
    });
  }

}
