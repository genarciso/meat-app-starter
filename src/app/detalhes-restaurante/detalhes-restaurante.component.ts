import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {RestauranteService} from "../restaurante/restaurante.service";
import {ItemsRestauranteModel} from "../restaurante/items-restaurante/items-restaurante.model";

@Component({
  selector: 'mt-detalhes-restaurante',
  templateUrl: './detalhes-restaurante.component.html'
})
export class DetalhesRestauranteComponent implements OnInit {

  restaurante: ItemsRestauranteModel

  constructor(private restauranteService: RestauranteService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.restauranteService.restauranteById(this.route.snapshot.params['id'])
      .subscribe(restaurante => this.restaurante = restaurante)
  }

}
