import {ItemCarrinhoModel} from './item-carrinho.model';
import {MenuItemModel} from '../menu-item/menu-item.model';
import {Injectable} from '@angular/core';

@Injectable()
export class CarrinhoService {
  itens: ItemCarrinhoModel[] = [];

  limpar() {
    this.itens = [];

  }

  adicionarItem(item: MenuItemModel) {
    let itemEncontrado = this.itens.find((mItem)=> mItem.menuItem.id === item.id);
    if (itemEncontrado) {
      this.aumentarQtd(itemEncontrado);

    }
    else {
      this.itens.push(new ItemCarrinhoModel(item));

    }

  }

  removerItem(item: ItemCarrinhoModel) {
     this.itens.splice(this.itens.indexOf(item), 1);

  }

  total(): number {
    return this.itens
      .map(item => item.valor())
      .reduce((prev, value) => prev + value, 0);

  }

  aumentarQtd(item: ItemCarrinhoModel) {
    item.quantidade += 1;

  }

  diminuirQtd(item: ItemCarrinhoModel) {
    item.quantidade -= 1;
    if (item.quantidade === 0) {
      this.removerItem(item);

    }

  }
}
