import { HoenComponent } from './components/pokedex/region/hoen/hoen.component';
import { JothoComponent } from './components/pokedex/region/jotho/jotho.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KantoComponent } from './components/pokedex/region/kanto/kanto.component';


const routes: Routes = [
  { path: '', redirectTo: '/kanto', pathMatch: 'full'},
  { path: 'jotho', component: JothoComponent, data: { region: 'jotho' } },
  { path: 'kanto', component: KantoComponent, data: { region: 'kanto' } },
  { path: 'hoenn', component: HoenComponent, data: { region: 'kanto' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
