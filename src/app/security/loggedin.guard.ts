import { LoginService } from './login/login.service';
import { CanLoad, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "../../../node_modules/@angular/router";
import { Injectable } from "../../../node_modules/@angular/core";
import { routerNgProbeToken } from '../../../node_modules/@angular/router/src/router_module';

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate{

    constructor(private loginService: LoginService){}

    chechAuthentication(path: string): boolean {
        const loggedIn = this.loginService.isLoggedIn()
        if(!loggedIn){
            this.loginService.handleLogin(`/${path}`)
        }
        
        return loggedIn
    }

    canLoad(route: Route): boolean{
        return this.chechAuthentication(route.path)
    }

    canActivate(activatedRoute: ActivatedRouteSnapshot,
                routerState: RouterStateSnapshot): boolean{
        return this.chechAuthentication(activatedRoute.routeConfig.path)
    }
}