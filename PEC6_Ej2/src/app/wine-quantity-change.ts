import { Wine } from "./model/wine";

export interface WineQuantityChange {
    wine: Wine;
    quantityInCart: number;
    mode: string;
}
