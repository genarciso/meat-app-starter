import { Component, OnInit } from '@angular/core';

import {RestauranteService} from "../../restaurante/restaurante.service";
import {Observable} from "rxjs/Observable";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'mt-avaliacoes',
  templateUrl: './avaliacoes.component.html'
})
export class AvaliacoesComponent implements OnInit {

  avaliacoes: Observable<any>;

  constructor(private restauranteService: RestauranteService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.avaliacoes = this.restauranteService
      .avaliacoesRestaurante(this.route.parent.snapshot.params['id']);
  }

}
