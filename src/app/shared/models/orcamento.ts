import { Loja } from './loja';
import { Vendedor } from './vendedor';

export class Orcamento {
    id: string;
    loja: Loja;
    vendedor: Vendedor;
    valorLista: number;
    valorFrete: number;
}
