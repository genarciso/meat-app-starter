import {MenuItemModel} from "../menu-item/menu-item.model";

export class ItemCarrinhoModel {

  constructor(public menuItem: MenuItemModel,
              public quantidade: number = 1){

  }

  valor():number{
    return this.menuItem.price * this.quantidade;

  }

}
