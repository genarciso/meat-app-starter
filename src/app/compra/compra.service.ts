import {Injectable} from '@angular/core';
import {CarrinhoService} from '../detalhes-restaurante/carrinho/carrinho.service';
import {ItemCarrinhoModel} from '../detalhes-restaurante/carrinho/item-carrinho.model';
import {CompraModel} from './compra.model';
import {Observable} from 'rxjs/Observable';
import {Headers, Http, RequestOptions} from '@angular/http';
import {MEAT_API} from '../app.api';

@Injectable()
export class CompraService {



  constructor(private carrinhoService: CarrinhoService, private http: Http) { }

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
  limpar() {
    return this.carrinhoService.limpar();
  }
  checkCompra(compra: CompraModel): Observable<string> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(`${MEAT_API}/orders/`,
                          JSON.stringify(compra),
                          new RequestOptions({headers: headers}))
      .map(response => response.json())
      .map(response => response.id);
  }
}
