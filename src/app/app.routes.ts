import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {RestauranteComponent} from "./restaurante/restaurante.component";
import {DetalhesRestauranteComponent} from "./detalhes-restaurante/detalhes-restaurante.component";

export const ROUTES: Routes = [
  {path: '', component:HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'restaurant', component: RestauranteComponent},
  {path: 'restaurant/:id', component: DetalhesRestauranteComponent}
];


