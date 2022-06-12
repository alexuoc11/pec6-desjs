import { Food } from 'src/app/model/food';

export class Wine {

    public id: number;
    public name: string
    public imageUrl: string
    public price: number
    public isOnSale: boolean
    public quantityInCart: number 
    public foodPairing: Food[]

    constructor(id: number, name: string, imageUrl: string, price: number, isOnSale: boolean, quantityInCart: number, foodPairing: Food[]){
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.price = price;
        this.isOnSale = isOnSale;
        this.quantityInCart = quantityInCart;
        this.foodPairing = foodPairing;
    }
}
