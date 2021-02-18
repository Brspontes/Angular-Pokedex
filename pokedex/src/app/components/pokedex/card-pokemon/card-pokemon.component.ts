import { environment } from './../../../../environments/environment.prod';
import { PokemonKanto } from './../../../models/pokemonModel';
import { PokedexService } from './../pokedex.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent implements OnInit {

  @Input() region: string

  public pokemons: PokemonKanto[]
  public url = environment.linkCdn
  public numberJotho: number = 152

  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {
    if(this.region === 'kanto')
    {
      this.request(environment.pokemonKanto)
    }
    else if(this.region === 'jotho') 
    {
      this.request(environment.pokemonJotho)
    }
  }

  private request(url: string) {
    this.pokedexService.getAllPokemonsKanto(url)
        .subscribe(
          success => {
            console.log(success.results),
              this.pokemons = success.results
          },
          error => console.log(error)
        )
  }
}