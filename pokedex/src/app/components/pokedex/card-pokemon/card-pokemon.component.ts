import { environment } from './../../../../environments/environment.prod';
import { PokemonKanto } from './../../../models/pokemonModel';
import { PokedexService } from './../pokedex.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent implements OnInit {

  public pokemons: PokemonKanto[]
  public url = environment.linkCdn

  constructor(private pokedexService: PokedexService, private router: ActivatedRoute,) {}

  ngOnInit(): void {

    console.log(this.router)

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