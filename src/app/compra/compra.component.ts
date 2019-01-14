import { Component, OnInit } from '@angular/core';
import {RadioOptionModel} from '../shared/radio/radio-option.model';
import {CompraService} from './compra.service';
import {ItemCarrinhoModel} from '../detalhes-restaurante/carrinho/item-carrinho.model';
import {CompraModel} from './compra.model';
import {ItemCompraModel} from './compra.model';
import {Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'mt-compra',
  templateUrl: './compra.component.html',
})
export class CompraComponent implements OnInit {

  compraForm: FormGroup;

  frete: number = 8;

  emailPattern = '^(([^<>()\\[\\]\\.,;:\\s@\\"]+(\\.[^<>()\\[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$';

  pagamentos: RadioOptionModel[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão de Crédito', value: 'CRE'},
    {label: 'Vale Refeição', value: 'REF'}
  ];

  constructor(private compraService: CompraService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.compraForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [
        Validators.required,
        Validators.pattern(this.emailPattern)
      ]),
      confirmationEmail: this.formBuilder.control('', [
        Validators.required,
        Validators.pattern(this.emailPattern)
      ]),
      address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      number: this.formBuilder.control('', [
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ]),
      optionalAddress: this.formBuilder.control(''),
      pagamento: this.formBuilder.control('', [Validators.required])
    }, {validator: CompraComponent.equalsTo});
  }

  static equalsTo(group: AbstractControl): {[key: string]: boolean} {
    const email = group.get('email');
    const confirmationEmail = group.get('confirmationEmail');

    if (!email || !confirmationEmail) {
      return undefined;
    }

    if (email.value !== confirmationEmail.value) {
      return {emailsNotMatch: true};
    }

    return undefined;
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

  checkCompra(compra: CompraModel) {
    compra.itensCompra = this.itensCompra()
      .map((item: ItemCarrinhoModel) => new ItemCompraModel(item.quantidade, item.menuItem.id));

    this.compraService.checkCompra(compra).subscribe(
                                        (compraId: string) => {
                                          this.router.navigate(['/sumario-compra']);
                                          this.compraService.limpar();

                                        });

  }
}
