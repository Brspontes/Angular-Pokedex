import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardPokemonComponent } from './components/pokedex/card-pokemon/card-pokemon.component';
import { HeaderComponent } from './components/pokedex/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/pokedex/menu/menu.component';
import { KantoComponent } from './components/pokedex/region/kanto/kanto.component';
import { JothoComponent } from './components/pokedex/region/jotho/jotho.component';
import { HoenComponent } from './components/pokedex/region/hoen/hoen.component';
import { ModalComponent } from './components/pokedex/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartComponent } from './components/general/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    CardPokemonComponent,
    HeaderComponent,
    MenuComponent,
    KantoComponent,
    JothoComponent,
    HoenComponent,
    ModalComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    NgCircleProgressModule.forRoot(),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
