import { Component, OnInit } from '@angular/core';
import { MinhaListaService } from 'src/app/core/services/minha-lista.service';
import { Lista, Anexo } from 'src/app/shared/models/lista';
import { Item } from 'src/app/shared/models/item';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { MensagensService } from 'src/app/core/services/mensagens.service';

@Component({
  selector: 'app-minha-lista',
  templateUrl: './minha-lista.component.html',
  styleUrls: ['./minha-lista.component.scss'],
})
export class MinhaListaComponent implements OnInit {

  qtdaItens: number;
  lista: Lista;
  constructor(
    private listaService: MinhaListaService,
    private photoViewer: PhotoViewer
  ) { }

  ngOnInit() {
    this.listaService.minhaLista().subscribe(lista => this.lista = lista);
    this.listaService.totalItens.subscribe(total => this.qtdaItens = total);
  }

  abrirAnexo(anexo: Anexo) {
    // this.listaService.removeAnexo(anexo);
    // this.photoViewer.show(anexo.thumb, 'Anexo', {share: true});
  }

  adicionaItem(textoItem: string) {
    const itens: string[] = textoItem.split('\n');
    from(itens).pipe(
      map(nomeItem => {
        return {
          descricao: '',
          nome: nomeItem,
          qtda: 0,
          unidade: null,
          valorMedio: 0
        };
      })
    ).subscribe((item: Item) => this.listaService.adicionaItem(item));
  }

  removeItem(item: Item) {
    this.listaService.removeItem(item.id);
  }

  adicionarImagem(imagem: string) {
    // this.listaService.adicionaAnexo({
    //   id: 0,
    //   nome: `Imagem ${this.lista.anexos.length + 1}`,
    //   thumb: imagem
    // });
  }


}
