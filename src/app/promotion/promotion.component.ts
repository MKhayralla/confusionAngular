import { Component, OnInit } from '@angular/core';
import { Promotion } from '../promotion' ;
import { PromotionsService } from '../promotions.service' ;
import { ConfigService } from '../config.service' ;

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {

  constructor(private PromotionsService : PromotionsService,
              private ConfigService : ConfigService) { }

  ngOnInit() {
    this.initPromo() ;
  }
  promotions : Promotion[] ;
  initPromo() : void{
    this.PromotionsService.getPromotions()
    .subscribe((dishes)=>{
      dishes.forEach(this.ConfigService.editPromoImg) ;
      this.promotions = dishes ;
    })
  }

}
