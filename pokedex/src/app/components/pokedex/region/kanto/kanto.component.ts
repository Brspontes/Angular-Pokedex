import { environment } from './../../../../../environments/environment';
import { PokedexService } from './../../pokedex.service';
import { Component, OnInit } from '@angular/core';
import { PokemonKanto } from 'src/app/models/pokemonModel';
@Component({
  selector: 'app-kanto',
  templateUrl: './kanto.component.html',
  styleUrls: ['./kanto.component.css']
})
export class KantoComponent implements OnInit {

  region: String = "kanto"
  public pokemons: PokemonKanto[]

  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {
    this.pokedexService.getAllPokemonsKanto(environment.pokemonKanto)
        .subscribe(
          success => {
            console.log(success.results),
              this.pokemons = success.results
          },
          error => console.log(error)
        )
  }

}
