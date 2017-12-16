import { Injectable } from '@angular/core';
import { Dish } from './dish' ;
import { Promotion } from './promotion' ;

const api = 'https://localhost:3443'
@Injectable()
export class ConfigService {
  url = api ;

  constructor() { }
  editImageLink(dish : Dish) : void {
    dish.image = `${api}/${dish.image}` ;
  }
  editPromoImg(promo : Promotion) : void {
    promo.image = `${api}/${promo.image}` ;
  }


}
