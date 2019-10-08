import { Component, OnInit } from '@angular/core';
import { ListaService } from 'src/app/core/services/lista.service';
import { Lista } from 'src/app/shared/models/lista';
import { ActionSheetController } from '@ionic/angular';
import { Item } from 'src/app/shared/models/item';
import { Router } from '@angular/router';
import { MensagensService } from 'src/app/core/services/mensagens.service';

@Component({
  selector: 'app-minha-lista',
  templateUrl: './minha-lista.component.html',
  styleUrls: ['./minha-lista.component.scss'],
})
export class MinhaListaComponent implements OnInit {

  lista: Lista;
  constructor(
    private listaService: ListaService,
    private router: Router,
    private mensagensService: MensagensService
  ) { }

  ngOnInit() {
    this.listaService.listaAtualizada().subscribe(lista => {
      if (this.lista && (!lista || !lista.itens || !lista.itens.length)) {
        this.mensagensService.toast('Todos os itens foram removidos!');
        this.router.navigate(['/main/inicio']);
      } else {
        this.lista = lista;
      }
    });
  }

  removeItem(item: Item) {
    this.listaService.removeItem(item.id);
  }



}
