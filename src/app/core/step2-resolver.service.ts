import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class Step2ResolverService implements Resolve<number> {

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<number> {
        return Observable.of(200).delay(2000);
    }

}
