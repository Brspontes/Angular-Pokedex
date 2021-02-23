import { PokemonWithImgUrl } from './../../../../models/pokemonModel';
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
  
  numberJotho: number = 152
  aux: number = 0
  public pokemons: PokemonKanto[]
  public pokemonsWithUrl: PokemonWithImgUrl[] = []
  public pokemonWithUrl: PokemonWithImgUrl

  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {
    this.pokedexService.getAllPokemonsKanto(environment.pokemonJotho)
    .subscribe(
      success => {
        console.log(success.results),
          this.pokemons = success.results
          this.addUrl()
      },
      error => console.log(error)
    )
  }

  private addUrl(): void {
    if(this.pokemons) {
      this.pokemons.forEach(element => {
        this.pokemonWithUrl = new PokemonWithImgUrl()

        this.pokemonWithUrl.name = element.name
        this.pokemonWithUrl.url = element.url
        this.pokemonWithUrl.imgUrl = `${environment.linkCdn}/${this.numberJotho + this.aux}.png`

        this.pokemonsWithUrl.push(this.pokemonWithUrl)
        this.aux++
      });
    }
  }
}
