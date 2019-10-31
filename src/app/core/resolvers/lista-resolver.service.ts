import { Injectable } from '@angular/core';
import { Resolve, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError, first } from 'rxjs/operators';
import { Lista } from 'src/app/shared/models/lista';
import { MinhaListaService } from '../services/minha-lista.service';


@Injectable({
  providedIn: 'root'
})
export class ListaResolverService implements Resolve<Lista> {

  constructor(
    private listaService: MinhaListaService,
    private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Lista> {
    return this.listaService.minhaLista()
      .pipe(
        first(),
        catchError(_ => {
          this.router.navigate(['/error']);
          return of(null);
        })
      );
  }

}
