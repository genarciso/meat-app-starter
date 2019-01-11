import { BrowserModule } from '@angular/platform-browser';
import {NgModule, LOCALE_ID} from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {ROUTES} from "./app.routes";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { ItemsRestauranteComponent } from './restaurante/items-restaurante/items-restaurante.component'
import { RestauranteService } from "./restaurante/restaurante.service";
import { DetalhesRestauranteComponent } from './detalhes-restaurante/detalhes-restaurante.component';
import { CarrinhoComponent } from './detalhes-restaurante/carrinho/carrinho.component';
import { MenuItemComponent } from './detalhes-restaurante/menu-item/menu-item.component';
import { MenuComponent } from './detalhes-restaurante/menu/menu.component';
import { AvaliacoesComponent } from './detalhes-restaurante/avaliacoes/avaliacoes.component';
import { CarrinhoService } from "./detalhes-restaurante/carrinho/carrinho.service";
import { CompraComponent } from './compra/compra.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestauranteComponent,
    ItemsRestauranteComponent,
    DetalhesRestauranteComponent,
    CarrinhoComponent,
    MenuItemComponent,
    MenuComponent,
    AvaliacoesComponent,
    CompraComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestauranteService, CarrinhoService, {provide:LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
