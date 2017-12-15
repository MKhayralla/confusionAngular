import { Component, OnInit } from '@angular/core';
import { Dish } from '../dish' ;
import { DishesService } from '../dishes.service' ;
import { ActivatedRoute } from '@angular/router' ;
import { ConfigService } from '../config.service' ;

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {

  constructor(private DishesService : DishesService ,
              private route : ActivatedRoute ,
              private ConfigService : ConfigService) { }

  ngOnInit() {
    this.setDish() ;
  }
  private url : string = this.ConfigService.url ;
  public dish : Dish ;
  setDish() : void {
    this.DishesService.getDish(this.route.snapshot.paramMap.get('id'))
    .subscribe((dish) =>{
      this.dish = dish ;
      this.dish.image = this.url+this.dish.image ;
    })
  }

}
