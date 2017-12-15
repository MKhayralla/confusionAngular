import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishComponent }      from '../dish/dish.component';
import { MenuComponent } from '../menu/menu.component';
import { CategoryComponent }  from '../category/category.component';
import { HomeComponent } from '../home/home.component' ;
import { ContactComponent } from '../contact/contact.component' ;
import { AboutusComponent } from '../aboutus/aboutus.component'
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'dish/:id', component: DishComponent },
  { path: 'home' , component : HomeComponent } ,
  { path: 'contact' , component : ContactComponent },
  { path: 'aboutus' , component : AboutusComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule {}
