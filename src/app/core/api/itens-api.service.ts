import { Injectable } from '@angular/core';
import { GenericApi } from './generic-api';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { endpoints } from 'src/environments/endpoints';
import { Item } from 'src/app/shared/models/item';

@Injectable({
  providedIn: 'root'
})
export class ItensApiService extends GenericApi<Item> {

  constructor(private http: HttpClient) {
    super(http, environment.apiUrl + endpoints.itens);
  }
}
