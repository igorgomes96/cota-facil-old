import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Lista, Anexo } from 'src/app/shared/models/lista';
import { Item } from 'src/app/shared/models/item';
import { Categoria } from 'src/app/shared/models/categoria';
import { AuthService } from './auth.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Usuario } from 'src/app/shared/models/usuario';
import { switchMap, map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MinhaListaService {

  constructor(
    private authService: AuthService,
    private db: AngularFirestore
  ) { }

  private async usuarioRef() {
    const usuario = await this.authService.getUser().toPromise();
    return this.db.doc(`usuarios/${usuario.uid}`);
  }

  async criaLista(categoria: Categoria): Promise<void> {
    const usuarioRef = await this.usuarioRef();
    const lista: any = {
      anexos: [],
      categoria,
      horarioEnvio: new Date(),
      itens: [],
      qtdaOrcamentos: 0
    };
    usuarioRef.update({ minhaLista: lista });
  }

  minhaLista(): Observable<Lista> {
    return this.authService.getUser()
    .pipe(
      filter(usuario => !!usuario),
      switchMap(usuario => this.db.doc<Usuario>(`usuarios/${usuario.uid}`).valueChanges()),
      map(usuario => usuario.minhaLista)
    );
  }

  async adicionaItem(item: Item): Promise<void> {
    const usuarioRef = await this.usuarioRef();
    const usuario = await usuarioRef.get().toPromise();
    const lista = (usuario.data() as Usuario).minhaLista;
    item.id = this.db.createId();
    const usuarioAtualizado = {
      minhaLista: {
        ...lista,
        itens: [...lista.itens, item]
      }
    };
    return usuarioRef.update(usuarioAtualizado);
  }

  async atualizaItem(itemId: string, item: Item): Promise<void> {
    await this.removeItem(itemId);
    return this.adicionaItem(item);
  }

  async removeItem(itemId: string): Promise<void> {
    const usuarioRef = await this.usuarioRef();
    const usuario = await usuarioRef.get().toPromise();
    const lista = (usuario.data() as Usuario).minhaLista;
    const itensAManter = lista.itens.filter(i => i.id !== itemId);
    const atualizacao = {
      minhaLista: {
        ...lista,
        itens: itensAManter
      }
    };
    return usuarioRef.update(atualizacao);
  }

  async adicionaAnexo(anexo: Anexo): Promise<void> {
    const usuarioRef = await this.usuarioRef();
    const usuario = await usuarioRef.get().toPromise();
    const lista = (usuario.data() as Usuario).minhaLista;
    anexo.id = this.db.createId();
    const usuarioAtualizado = {
      minhaLista: {
        ...lista,
        anexos: [...lista.anexos, anexo]
      }
    };
    return usuarioRef.update(usuarioAtualizado);
  }

  async removeAnexo(anexoId: string): Promise<void> {
    const usuarioRef = await this.usuarioRef();
    const usuario = await usuarioRef.get().toPromise();
    const lista = (usuario.data() as Usuario).minhaLista;
    const anexosAManter = lista.anexos.filter(i => i.id !== anexoId);
    const atualizacao = {
      minhaLista: {
        ...lista,
        anexos: anexosAManter
      }
    };
    return usuarioRef.update(atualizacao);
  }

  async enviarLista(): Promise<void> {
    const usuarioRef = await this.usuarioRef();
    const usuario = await usuarioRef.get().toPromise();
    const lista = (usuario.data() as Usuario).minhaLista;
    const listaId = this.db.createId();
    lista.id = listaId;
    const listaRef: AngularFirestoreDocument<Lista> = usuarioRef.collection('listas').doc(listaId);
    this.limparLista();
    return listaRef.set(lista);
  }

  async limparLista(): Promise<void> {
    const usuarioRef = await this.usuarioRef();
    return usuarioRef.update({ minhaLista: null });
  }

  get totalItens(): Observable<number> {
    return this.minhaLista().pipe(map(minhaLista => (minhaLista && minhaLista.itens) ? minhaLista.itens.length : 0));
  }

}
