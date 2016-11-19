import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class CompanyStocksGuard implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const id = route.params['id'];

        if (id.length > 1) {
            return true;
        }

        this.router.navigate(['/stocks']);

        return false;
    }
}
