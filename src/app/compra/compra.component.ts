import { Component, OnInit } from '@angular/core';
import {RadioOptionModel} from '../shared/radio/radio-option.model';
import {CompraService} from './compra.service';
import {ItemCarrinhoModel} from '../detalhes-restaurante/carrinho/item-carrinho.model';

@Component({
  selector: 'mt-compra',
  templateUrl: './compra.component.html',
})
export class CompraComponent implements OnInit {

  frete: number = 8;

  pagamentos: RadioOptionModel[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão de Crédito', value: 'CRE'},
    {label: 'Vale Refeição', value: 'REF'}
  ];

  constructor(private compraService: CompraService) { }

  ngOnInit() {
  }

  valorItens(): number {
    return this.compraService.valorItens();

  }
  itensCompra(): ItemCarrinhoModel[] {
    return this.compraService.itensCarrinho();

  }

  aumentarQtd(item: ItemCarrinhoModel) {
    this.compraService.aumentarQtd(item);

  }

  diminuirQtd(item: ItemCarrinhoModel) {
    this.compraService.diminuirQtd(item);

  }

  remover(item: ItemCarrinhoModel) {
    this.compraService.remover(item);
  }

}
