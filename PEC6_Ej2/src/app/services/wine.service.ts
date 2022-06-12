import { Injectable } from '@angular/core';
import { Wine } from '../model/wine';
import { WineQuantityChange } from '../wine-quantity-change'; 
import { Observable, throwError } from 'rxjs';                 
import { of as ObservableOf } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WineService {

  public list: Wine[] = [];

  constructor() { 
    this.list[0] = new Wine(1, "Vino 1", "https://www.bodasoutlet.es/7969-large_default/botellas-de-vino-para-regalar-375-ml.jpg",12,true,1,[]);
    this.list[1] = new Wine(2, "Vino 2", "https://www.decantalo.com/uk/45033/vinas-elias-mora.jpg",16,false,1,[]);
    this.list[2] = new Wine(3, "Vino 3", "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201610/11/00118738800616____2__600x600.jpg",23,true,1,[]);
  }

  getWines() : Wine[] {
    return this.list;
  }

  getStocks() : Observable<Wine[]> {                   
    return ObservableOf(this.list);                   
  }

  createStock(wine: Wine) {
    let foundStock = this.list.find(each => each.id === wine.id);
    if (foundStock) {
      return throwError({msg: 'Wine with code ' +          
          wine.id + ' already exists'});
    }
    this.list.push(wine);
    return throwError({msg: 'Wine with code ' + wine.id +
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
