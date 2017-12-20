import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service' ;
import { Router } from '@angular/router' ;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private UsersService : UsersService ,
              private router : Router) { }
  public username : string ;
  public password : string ;
  public passwordConfirm : string ;
  public repeated : boolean = false ;

  ngOnInit() {
  }
  signup() : void {
    this.UsersService.signUp(this.username , this.password)
    .subscribe((result)=>{
      if (result) {
        console.log('signed up successfully !')
        alert('signed up successfully !');
        this.repeated = false ;
        this.router.navigate(['/login']) ;
        document.location.reload() ;
      }
      else {
        this.repeated = true ;
      }
    } , () => this.repeated = true )
  }


}
