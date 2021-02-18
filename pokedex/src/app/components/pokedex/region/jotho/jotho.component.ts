import { Component, OnInit } from '@angular/core';
import { PokemonKanto } from 'src/app/models/pokemonModel';
import { environment } from 'src/environments/environment';
import { PokedexService } from '../../pokedex.service';

@Component({
  selector: 'app-jotho',
  templateUrl: './jotho.component.html',
  styleUrls: ['./jotho.component.css']
})
export class JothoComponent implements OnInit {

  region: String = 'jotho'
  public pokemons: PokemonKanto[]

  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {
    this.pokedexService.getAllPokemonsKanto(environment.pokemonJotho)
    .subscribe(
      success => {
        console.log(success.results),
          this.pokemons = success.results
      },
      error => console.log(error)
    )
  }

}
