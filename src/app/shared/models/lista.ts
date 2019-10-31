import { Item } from './item';
import { Categoria } from './categoria';

export class Lista {
    id: string;
    categoria: Categoria;
    horarioEnvio: Date;
    itens: Item[];
    anexos: Anexo[];
    qtdaOrcamentos: number;
}

export class Anexo {
    id: string;
    nome: string;
    thumb: string;
}
