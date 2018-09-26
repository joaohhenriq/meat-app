import { Http } from '@angular/http';
import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { Injectable } from "../../../node_modules/@angular/core";
import { Order } from './order.model';
import { Observable } from '../../../node_modules/rxjs/Observable';

@Injectable()
export class OrderService{

    constructor(private cartService: ShoppingCartService, private http: Http){}

    cartItems(): CartItem[]{
        return this.cartService.items
    }

    increaseQty(item: CartItem){
        this.cartService.increaseQty(item)
    }

    decreaseQty(item: CartItem){
        this.cartService.decreaseQty(item)
    }

    remove(item: CartItem){
        this.cartService.removeItem(item)
    }

    itemsValue(): number{
        return this.cartService.total()  
    }

    checkOrder(order: Order): Observable<string>{
        return  this.http.post()
    }
}