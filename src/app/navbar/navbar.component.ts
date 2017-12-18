import { Component, OnInit , OnChanges } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { UsersService } from '../users.service' ;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit , OnChanges {

  constructor(private UsersService : UsersService) {}
  public loggedin : boolean ;
  public toggled : boolean  ;

  ngOnInit() {
    this.set();
    this.toggled = false ;
  }
  ngOnChanges() {
    this.set()
  }
  isNavbarCollapsed : boolean  = false ;
  logOut () : void {
    this.UsersService.logOut() ;
    this.set() ;
    document.location.reload() ;
  }
  set() : void {
    this.loggedin = tokenNotExpired() ;
  }
  toggleMenu() : void {
    this.toggled = !this.toggled ;
  }

}
