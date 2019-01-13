import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ItemCarrinhoModel} from '../../detalhes-restaurante/carrinho/item-carrinho.model';

@Component({
  selector: 'mt-item-compra',
  templateUrl: './item-compra.component.html',
})
export class ItemCompraComponent implements OnInit {

  @Input() itens: ItemCarrinhoModel[];

  @Output() aumentarQtd = new EventEmitter<ItemCarrinhoModel>();
  @Output() diminuirQtd = new EventEmitter<ItemCarrinhoModel>();
  @Output() remover = new EventEmitter<ItemCarrinhoModel>();

  constructor() { }

  ngOnInit() {
  }

  emitirAumentoQtd(item: ItemCarrinhoModel) {
    this.aumentarQtd.emit(item);

  }

  emitirDimuicaoQtd(item: ItemCarrinhoModel) {
    this.diminuirQtd.emit(item);

  }

  emitirRemocao(item: ItemCarrinhoModel) {
    this.remover.emit(item);

  }

}
