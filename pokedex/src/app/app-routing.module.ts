import { JothoComponent } from './components/pokedex/region/jotho/jotho.component';
import { CardPokemonComponent } from './components/pokedex/card-pokemon/card-pokemon.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KantoComponent } from './components/pokedex/region/kanto/kanto.component';


const routes: Routes = [
  { path: '', redirectTo: '/kanto', pathMatch: 'full'},
  { path: 'jotho', component: JothoComponent, data: { region: 'jotho' } },
  { path: 'kanto', component: KantoComponent, data: { region: 'kanto' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
