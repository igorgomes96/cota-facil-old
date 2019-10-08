import { Injectable } from '@angular/core';
import { Resolve, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Lista } from 'src/app/shared/models/lista';
import { ListaApiService } from '../api/lista-api.service';


@Injectable({
  providedIn: 'root'
})
export class ListaResolverService implements Resolve<Lista> {

  constructor(
    private api: ListaApiService,
    private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Lista> {
    return this.api.getLista()
      .pipe(
        catchError(_ => {
          this.router.navigate(['/error']);
          return of(null);
        })
      );
  }

}
