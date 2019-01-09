import { Component, OnInit } from '@angular/core';
import {ItemsRestauranteModel} from "./items-restaurante/items-restaurante.model";
import {RestauranteService} from "./restaurante.service";

@Component({
  selector: 'mt-restaurante',
  templateUrl: './restaurante.component.html',
})
export class RestauranteComponent implements OnInit {

  items:ItemsRestauranteModel[];

  constructor(private restauranteService: RestauranteService) { }

  ngOnInit() {
    this.restauranteService.itens_restaurantes()
       .subscribe(restaurants => this.items = restaurants);
  }

}
