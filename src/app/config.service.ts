import { Injectable } from '@angular/core';
import { Dish } from './dish' ;
import { Promotion } from './promotion' ;

const api = 'https://confusion1995.herokuapp.com' ;
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
