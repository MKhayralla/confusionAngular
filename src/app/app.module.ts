import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http' ;


import { AppComponent } from './app.component';
import { DishesService } from './dishes.service';
import { ConfigService } from './config.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LeadersService } from './leaders.service';
import { PromotionsService } from './promotions.service';
import { LeaderComponent } from './leader/leader.component';
import { PromotionComponent } from './promotion/promotion.component';
import { CategoryComponent } from './category/category.component';
import { DishComponent } from './dish/dish.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing/routing.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { FactsComponent } from './facts/facts.component' ;


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    MenuComponent,
    ContactComponent,
    AboutComponent,
    LeaderComponent,
    PromotionComponent,
    CategoryComponent,
    DishComponent,
    HomeComponent,
    AboutusComponent,
    FooterComponent,
    FactsComponent
  ],
  imports: [
    BrowserModule ,
    FormsModule ,
    HttpClientModule,
    RoutingModule 
  ],
  providers: [DishesService, ConfigService, LeadersService,PromotionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
