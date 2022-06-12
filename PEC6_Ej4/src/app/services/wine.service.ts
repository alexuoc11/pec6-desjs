import { Injectable } from '@angular/core';
import { Wine } from '../model/wine';
import { WineQuantityChange } from '../wine-quantity-change'; 
import { Observable, throwError } from 'rxjs';                 
import { of as ObservableOf } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WineService {

  public list: Wine[] = [];

  constructor(private http: HttpClient) {}

  getWines() : Observable<Wine[]> {
    return this.http.get<Wine[]>('/api/wine');
  }

  createWines(wine: Wine) {
    let foundWine = this.list.find(each => each.id === wine.id);
    if (foundWine) {
      return throwError({msg: 'Wine with id ' +          
          wine.id + ' already exists'});
    }
    this.list.push(wine);
    return throwError({msg: 'Wine with id ' + wine.id +
    ' successfully created'});
  }

  update(quantity: WineQuantityChange) {
    this.list.forEach(function (wine) {
      if(quantity.wine.id == wine.id){
        if(quantity.mode == '+'){
          wine.quantityInCart = wine.quantityInCart + 1;
        }else if(quantity.mode == '-'){
          wine.quantityInCart = wine.quantityInCart - 1;
        }
      }
    });
  }
}
