import { Component, OnInit , Input , OnChanges } from '@angular/core';
import { DishesService } from '../dishes.service';
import { Dish }  from '../dish' ;

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, OnChanges {

  constructor(private DishesService : DishesService) { }
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
        this.dishes = dishes ;
      }) ;
    }
    else {
      this.DishesService.getDishes()
      .subscribe((dishes) => {
        this.dishes = dishes ;
      }) ;
    }

  }

}
