import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {RestauranteService} from "../../restaurante/restaurante.service";
import {Observable} from "rxjs";
import {MenuItemModel} from "../menu-item/menu-item.model";

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  })
export class MenuComponent implements OnInit {

  menu: Observable<MenuItemModel[]>;

  constructor(private restauranteService: RestauranteService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restauranteService
      .menuRestaurante(this.route.parent.snapshot.params['id']);
  }

  addMenuItem(item: MenuItemModel){
    console.log(item);
  }

}
