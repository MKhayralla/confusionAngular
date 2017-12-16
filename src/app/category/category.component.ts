import { Component, OnInit , Input , OnChanges } from '@angular/core';
import { DishesService } from '../dishes.service';
import { Dish }  from '../dish' ;
import { ConfigService } from '../config.service' ;

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, OnChanges {

  constructor(private DishesService : DishesService ,
              private ConfigService : ConfigService) { }
  @Input()
  category : string ;
  dishes : Dish[] ;

  ngOnInit() {
    this.updatCategoryTemp() ;

  }
  ngOnChanges() {
    this.updatCategoryTemp() ;
  }
  updatCategoryTemp() : void {
    if(this.category.length > 0){
      this.DishesService.getCategory(this.category)
      .subscribe((dishes) => {
        dishes.forEach(this.ConfigService.editImageLink) ;
        this.dishes = dishes ;
      }) ;
    }
    else {
      this.DishesService.getDishes()
      .subscribe((dishes) => {
        dishes.forEach(this.ConfigService.editImageLink) ;
        this.dishes = dishes ;
      }) ;
    }
  }

}
