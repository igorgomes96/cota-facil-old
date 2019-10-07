export class Unidade {
    sigla: string;
    nome: string;
}

export class Item {
    nome: string;
    descricao: string;
    unidade: Unidade;
    qtda: number;
    valorMedio: number;
}
