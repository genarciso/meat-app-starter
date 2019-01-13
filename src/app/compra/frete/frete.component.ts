import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'mt-frete',
  templateUrl: './frete.component.html'
})
export class FreteComponent implements OnInit {

  @Input() frete: number;
  @Input() valorItens: number;

  constructor() { }

  ngOnInit() {
  }

  total(): number {
    return this.frete + this.valorItens;
  }
}
