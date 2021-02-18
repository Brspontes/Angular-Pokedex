import { Component, OnInit } from '@angular/core';
import { PokemonKanto } from 'src/app/models/pokemonModel';
import { environment } from 'src/environments/environment';
import { PokedexService } from '../../pokedex.service';

@Component({
  selector: 'app-hoen',
  templateUrl: './hoen.component.html',
  styleUrls: ['./hoen.component.css']
})
export class HoenComponent implements OnInit {

  region: string = 'hoenn'
  public pokemons: PokemonKanto[]

  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {
    this.pokedexService.getAllPokemonsKanto(environment.pokemonHoenn)
    .subscribe(
      success => {
        console.log(success.results),
          this.pokemons = success.results
      },
      error => console.log(error)
    )
  }
}
