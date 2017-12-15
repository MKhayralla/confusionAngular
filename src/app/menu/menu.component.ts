import { Component, OnInit } from '@angular/core';
import { DishesService } from '../dishes.service' ;
import { Dish } from '../dish' ;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private dishService : DishesService) { }

  ngOnInit() {
    this.getMenu() ;
  }
  public dishes : Dish[] ;
  public categories : string[] =['appetizer','mains','dessert','drinks','specials','buffet','brunch'] ;
  public current : string = '' ;
  getMenu() : void {
    this.dishService.getDishes()
    .subscribe((dishes) =>{
      this.dishes = dishes ;
    });
  }
  public setCategory(cat : string ) : void{
    this.current = cat ;
  }

}
