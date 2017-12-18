import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of' ;
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ConfigService } from './config.service' ;
import { Router } from '@angular/router' ;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UsersService {

  constructor(private http : HttpClient ,
    private ConfigService : ConfigService,
    private router : Router) { }
  message = '' ;
  url = this.ConfigService.url ;
  log(message : string) {
    this.message+=message ;
  }
  public token: string ;
  /*log in */
  login(username: string, password: string): Observable<boolean> {
        return this.http.post(`${this.url}/users/login`, JSON.stringify({ username: username, password: password }),httpOptions)
            .pipe(tap((response: any) => {
              console.log(JSON.stringify(response)) ;
                // login successful if there's a jwt token in the response
                let token = response && response.token;
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('token', token );
                    localStorage.setItem('currentUser', username) ;

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            }),catchError(this.handleError('log in : ',null)));
    }


  /*Sign up*/
  signUp(username : string , password : string) : Observable<boolean> {
    return this.http.post(`${this.url}/users/signup`,JSON.stringify({username : username , password : password}),httpOptions)
        .pipe(tap((response : any) =>{
          // signup successful if there's a jwt token in the response
          let token = response && response.token;
          if (token) {
              // set token property
              this.token = token;

              // store username and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('token', token );
              localStorage.setItem('currentUser', username) ;

              // return true to indicate successful login
              return true;
          } else {
              // return false to indicate failed signup
              return false;
            }
        }),catchError(this.handleError('sign up : ',null)))
  }
  /*Log Out*/
  logOut() : void {
    localStorage.removeItem('token') ;
    localStorage.removeItem('currentUser') ;
    this.router.navigate(['/']);
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      console.error(this.message) ;

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
