import { Component, OnInit } from '@angular/core';
import { Promotion } from '../promotion' ;
import { PromotionsService } from '../promotions.service' ;

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {

  constructor(private PromotionsService : PromotionsService) { }

  ngOnInit() {
    this.initPromo() ;
  }
  promotions : Promotion[] ;
  initPromo() : void{
    this.PromotionsService.getPromotions()
    .subscribe((dishes)=>{
      this.promotions = dishes ;
    })
  }

}
