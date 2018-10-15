import { LoginService } from './login/login.service';
import { CanLoad, Route } from "../../../node_modules/@angular/router";
import { Injectable } from "../../../node_modules/@angular/core";
import { routerNgProbeToken } from '../../../node_modules/@angular/router/src/router_module';

@Injectable()
export class LoggedInGuard implements CanLoad{

    constructor(private loginService: LoginService){}

    canLoad(route: Route): boolean{
        const loggedIn = this.loginService.isLoggedIn()
        if(!loggedIn){
            this.loginService.handleLogin(`/${route.path}`)
        }
        
        return loggedIn
    }
}