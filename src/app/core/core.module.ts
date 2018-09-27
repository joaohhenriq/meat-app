import { RestaurantsService } from './../restaurants/restaurants.service';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { NgModule } from "../../../node_modules/@angular/core";
import { OrderService } from '../order/order.service';

@NgModule({
    providers: [ShoppingCartService, RestaurantsService, OrderService]
})

export class CoreModule{}