import {ItemCarrinhoModel} from "./item-carrinho.model";
import {MenuItemModel} from "../menu-item/menu-item.model";
import {Injectable} from "@angular/core";

@Injectable()
export class CarrinhoService {
  itens: ItemCarrinhoModel[] = [];

  limpar(){
    this.itens = [];

  }

  adicionarItem(item: MenuItemModel){
    let itemEncontrado = this.itens.find((mItem)=> mItem.menuItem.id === item.id);
    if(itemEncontrado){
      itemEncontrado.quantidade += 1;
    }
    else {
      this.itens.push(new ItemCarrinhoModel(item));
    }

  }

  removerItem(item: ItemCarrinhoModel){
     this.itens.splice(this.itens.indexOf(item), 1);

  }

  total(): number{
    return this.itens
      .map(item => item.valor())
      .reduce((prev, value) => prev + value, 0);

  }

}
