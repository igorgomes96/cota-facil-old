import { Injectable } from '@angular/core';
import { GenericApi } from './generic-api';
import { Categoria } from 'src/app/shared/models/categoria';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { endpoints } from 'src/environments/endpoints';

@Injectable({
  providedIn: 'root'
})
export class CategoriasApiService extends GenericApi<Categoria> {

  constructor(private http: HttpClient) {
    super(http, environment.apiUrl + endpoints.categorias);
  }
}
