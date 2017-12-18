import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of' ;
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ConfigService } from './config.service' ;
import { AuthHttp } from 'angular2-jwt' ;
import { Http , Headers } from '@angular/http' ;
const httpOptions = {
  headers: new Headers({ 'Content-Type': 'application/json' })
};
import { Dish } from './dish' ;
@Injectable()
export class DishesService {
  constructor(private http : HttpClient ,
    private ConfigService : ConfigService ,
    private HTTP : AuthHttp) { }
  message = '' ;
  url = this.ConfigService.url ;
  log(message : string) {
    this.message+=message ;
  }
  /*Get All Dishes : */
  getDishes() : Observable<Dish[]> {
    const url = `${this.url}/dishes` ;
    return this.http.get<Dish[]>(url)
      .pipe(tap((dishes) =>{
        this.log('fetched dishes') ;
      }),
    catchError(this.handleError('getDishes', [])));
  }
  /*Get dishes by category */
  getCategory(category : string) : Observable<Dish[]> {
    const url = `${this.url}/dishes` ;
    return this.http.get<Dish[]>(`${url}?category=${category}`)
      .pipe(tap((dishes) =>{
        this.log('fetched' + category ) ;
      }),
    catchError(this.handleError('getDishes', [])));
  }
  getDish(id : string) : Observable<Dish> {
    const url = `${this.url}/dishes` ;
    return this.http.get<Dish>(`${url}/${id}`)
      .pipe(tap((dish) => {
        this.log('fetched dish with id' + id ) ;
      }),
      catchError(this.handleError('getDish' , null)));
  }
  postComment (rating : number , comment : string , dishId : string) : Observable<Dish> {
    const url =`${this.url}/dishes/${dishId}/comments` ;
    return this.HTTP.post(url,JSON.stringify({'rating' : rating , 'comment' : comment}),httpOptions)
    .pipe(tap((dish) =>this.log('comment posted')),
          catchError(this.handleError('post comment : ',null))) ;
  }
  deleteComment (dishId : string , commentId : string) : Observable<Dish> {
    const url =`${this.url}/dishes/${dishId}/comments/${commentId}` ;
    return this.HTTP.delete(url,httpOptions)
    .pipe(tap((dish) =>this.log('comment deleted')),
          catchError(this.handleError('delete comment : ',null))) ;
  }
  editComment (dishId : string , commentId : string, rating : number , comment : string) : Observable<Dish> {
    const url =`${this.url}/dishes/${dishId}/comments/${commentId}` ;
    return this.HTTP.put(url,JSON.stringify({'rating' : rating , 'comment' : comment}),httpOptions)
    .pipe(tap((dish) =>this.log('comment edited')),
          catchError(this.handleError('edit comment : ',null))) ;
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
