import { LoginService } from './../security/login/login.service';
import { OrderService } from './../order/order.service';
import { RestaurantsService } from './../restaurants/restaurants.service';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { RatingComponent } from './rating/rating.component';
import { RadioComponent } from './radio/radio.component';
import { NgModule, ModuleWithProviders } from "../../../node_modules/@angular/core";
import { InputComponent } from "./input/input.component";
import { CommonModule } from '../../../node_modules/@angular/common';
import { FormsModule, ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { NotificationService } from './messages/notification.service';
import { LoggedInGuard } from '../security/loggedin.guard';

@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent ],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent,
            CommonModule, FormsModule, ReactiveFormsModule]
})

export class SharedModule{
    static forRoot(): ModuleWithProviders{
        return {
            ngModule: SharedModule,
            providers: [ShoppingCartService, RestaurantsService, 
                        OrderService, NotificationService, LoginService,
                        LoggedInGuard]
        }
    }
}