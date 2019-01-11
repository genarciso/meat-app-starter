import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {RestauranteComponent} from "./restaurante/restaurante.component";
import {DetalhesRestauranteComponent} from "./detalhes-restaurante/detalhes-restaurante.component";
import {AvaliacoesComponent} from "./detalhes-restaurante/avaliacoes/avaliacoes.component";
import {MenuComponent} from "./detalhes-restaurante/menu/menu.component";
import {CompraComponent} from "./compra/compra.component";

export const ROUTES: Routes = [
  {path: '', component:HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'restaurant', component: RestauranteComponent},
  {path: 'restaurant/:id', component: DetalhesRestauranteComponent,
    children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'menu', component: MenuComponent},
      {path: 'avaliacoes', component:AvaliacoesComponent}
    ]},
  {path: 'compra', component: CompraComponent}

];


