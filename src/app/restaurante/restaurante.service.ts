import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {MEAT_API} from "../app.api";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {ItemsRestauranteModel} from "./items-restaurante/items-restaurante.model";
import {ErrorHandle} from "../app.error-handle";
import {MenuItemModel} from "../detalhes-restaurante/menu-item/menu-item.model";

@Injectable()
export  class  RestauranteService {


  constructor(private http: Http){}


  itens_restaurantes(): Observable<ItemsRestauranteModel[]> {
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandle.handleError);

  }
  restauranteById(id: string): Observable<ItemsRestauranteModel> {
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandle.handleError);
  }

  avaliacoesRestaurante(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHandle.handleError);
  }

  menuRestaurante(id: string): Observable<MenuItemModel[]>{
    return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
      .map(response => response.json())
      .catch(ErrorHandle.handleError);
  }
}
