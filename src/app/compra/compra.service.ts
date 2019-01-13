import {Injectable} from '@angular/core';
import {CarrinhoService} from '../detalhes-restaurante/carrinho/carrinho.service';
import {ItemCarrinhoModel} from '../detalhes-restaurante/carrinho/item-carrinho.model';

@Injectable()
export class CompraService {

  constructor(private carrinhoService: CarrinhoService) { }

  itensCarrinho(): ItemCarrinhoModel[] {
    return this.carrinhoService.itens;

  }

  aumentarQtd(item: ItemCarrinhoModel) {
    this.carrinhoService.aumentarQtd(item);

  }

  diminuirQtd(item: ItemCarrinhoModel) {
    this.carrinhoService.diminuirQtd(item);

  }

  remover(item: ItemCarrinhoModel) {
    this.carrinhoService.removerItem(item);

  }

  valorItens(): number {
    return this.carrinhoService.total();

  }
}
