import { Injectable } from '@angular/core';
import { GenericApi } from './generic-api';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { endpoints } from 'src/environments/endpoints';
import { Item } from 'src/app/shared/models/item';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { PagedResult } from 'src/app/shared/models/paged-result';
import { ListaApiService } from './lista-api.service';

@Injectable({
  providedIn: 'root'
})
export class ItensApiService extends GenericApi<Item> {

  constructor(private http: HttpClient, private listaApi: ListaApiService) {
    super(http, environment.apiUrl + endpoints.itens);
  }

  getAll(params: any = {}): Observable<Item[] | PagedResult<Item>> {
    const parametrosValidos = params && params.pesquisa ?
      { q: params.pesquisa } : undefined;

    return forkJoin([super.getAll(parametrosValidos), this.listaApi.getLista()])
      .pipe(map(dados => {
        const itens = dados[0] as Item[];
        const lista = dados[1];
        itens.forEach(i => i.qtda = 0);
        lista.itens.forEach(item => {
          const itemProcurado = itens.find(i => i.id === item.id);
          if (itemProcurado) {
            itemProcurado.qtda = item.qtda;
          }
        });
        return itens;
      }));
  }
}
