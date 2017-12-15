import { Injectable } from '@angular/core';
import { ConfigService } from './config.service' ;
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of' ;
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Promotion } from './promotion' ;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PromotionsService {

  constructor(private ConfigService : ConfigService
              ,private http : HttpClient) { }
  message = '' ;
  url = this.ConfigService.url ;
  log(message : string) {
      this.message+=message ;
  }
  getPromotions() : Observable<Promotion[]>{
    const url = this.url ;
    return this.http.get<Promotion[]>(`${url}/promotions`)
        .pipe(tap((promotions)=>this.log('fetched promotions')),
              catchError(this.handleError('Promotions : ', []))) ;
  }
  getPromotion(id : string ) : Observable<Promotion>{
    const url = this.url ;
    return this.http.get<Promotion>(`${url}/promotions/${id}`)
        .pipe(tap((promotion)=>{
          this.log(`fetched promotion with id ${id}`) ;
        }),catchError(this.handleError('Promotions : ',null)));
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
