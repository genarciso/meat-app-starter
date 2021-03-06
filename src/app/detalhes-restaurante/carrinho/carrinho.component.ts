import { Component, OnInit } from '@angular/core';
import {CarrinhoService} from "./carrinho.service";

@Component({
  selector: 'mt-carrinho',
  templateUrl: './carrinho.component.html',
})
export class CarrinhoComponent implements OnInit {


  constructor(private carrinhoService: CarrinhoService) { }

  ngOnInit() {
  }

  itens(): any[] {
    return this.carrinhoService.itens;

  }

  total(): number {
    return this.carrinhoService.total();

  }

  limpar(){
    this.carrinhoService.limpar();

  }

  removerItem(item: any){
    this.carrinhoService.removerItem(item);

  }

  adicionarItem(item: any){
    this.carrinhoService.adicionarItem(item);

  }


}
