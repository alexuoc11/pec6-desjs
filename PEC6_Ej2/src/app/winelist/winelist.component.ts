import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Food } from '../model/food';
import { Wine } from '../model/wine';
import { WineService } from '../services/wine.service';
import { WineQuantityChange } from '../wine-quantity-change';
import { WineitemComponent } from '../wineitem/wineitem.component';

@Component({
  selector: 'app-winelist',
  templateUrl: './winelist.component.html',
  styleUrls: ['./winelist.component.css']
})
export class WinelistComponent implements OnInit {

  public list$: Observable<Wine[]> | undefined;

  constructor(private wineService: WineService) {}

  ngOnInit(): void {
    this.list$ = this.wineService.getStocks();       
  }

  update(quantity: WineQuantityChange) {
    this.wineService.update(quantity); 
  }

}
