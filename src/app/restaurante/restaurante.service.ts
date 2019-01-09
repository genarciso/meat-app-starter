import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {MEAT_API} from "../app.api";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {ItemsRestauranteModel} from "./items-restaurante/items-restaurante.model";
import {ErrorHandle} from "../app.error-handle";

@Injectable()
export  class  RestauranteService {


  constructor(private http: Http){}


  itens_restaurantes(): Observable<ItemsRestauranteModel[]> {
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandle.handleError);

  }
  
}
