import {Component, Input, OnInit} from '@angular/core';
import {ItemsRestauranteModel} from "./items-restaurante.model";

@Component({
  selector: 'mt-items-restaurante',
  templateUrl: './items-restaurante.component.html',
})
export class ItemsRestauranteComponent implements OnInit {

  @Input() restaurant: ItemsRestauranteModel;

  constructor() { }

  ngOnInit() {
  }

}
