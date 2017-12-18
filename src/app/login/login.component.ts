import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service' ;
import { Router } from '@angular/router' ;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private UsersService : UsersService ,
              private router : Router) { }
  public username : string ;
  public password : string ;

  ngOnInit() {
  }
  public wrong : boolean = false  ;
  login() : void {
    this.UsersService.login(this.username , this.password)
    .subscribe((result)=>{
      if (result) {
        console.log('logged in successfully !')
        this.router.navigate(['/']) ;
        document.location.reload() ;
      }
      else {
        this.wrong = true ;
      }
    })
  }

}
