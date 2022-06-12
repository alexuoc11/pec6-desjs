import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Wine } from 'src/app/model/wine';
import { WineQuantityChange } from '../wine-quantity-change';

@Component({
  selector: 'app-wineitem',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './wineitem.component.html',
  styleUrls: ['./wineitem.component.css']
})
export class WineitemComponent implements OnInit {
  //nombre, precio, imagen del vino, si está en venta, la cantidad comprada e incluso la lista de maridaje a la que puede acompañar este vino
  //nombre, precio, imagen del vino, si está en venta, la cantidad comprada e incluso la lista de maridaje a la que puede acompañar este vino
  public wineClasses: any;

  @Input() public wine!: Wine;
  @Output() private quantity!: EventEmitter<WineQuantityChange>;

  constructor() {
    this.quantity = new EventEmitter<WineQuantityChange>();
  }

  ngOnInit(): void {
    this.wineClasses = {
      "positive": this.wine.isOnSale,
      "negative": !this.wine.isOnSale
    };
  }

  isQuantityZero(): boolean{
    return !(this.wine.quantityInCart == 0);
  }

  update(event: any, modeUpdate: string): void{
    let emitQuantity: WineQuantityChange;
    emitQuantity = {
      wine: this.wine, 
      quantityInCart: this.wine.quantityInCart,
      mode: modeUpdate
    }
    this.quantity.emit(emitQuantity);
  }
}
