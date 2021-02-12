import { environment } from './../../../../environments/environment.prod';
import { PokemonKanto } from './../../../models/pokemonModel';
import { PokedexService } from './../pokedex.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent implements OnInit {

  public pokemons: PokemonKanto[]
  public url = environment.linkCdn
  
  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {
    this.pokedexService.getAllPokemonsKanto()
      .subscribe(
        success => { 
          console.log(success.results), 
          this.pokemons = success.results
        },
        error => console.log(error)
      )
  }
}
