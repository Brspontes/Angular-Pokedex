import { PokemonWithImgUrl } from './../../../../models/pokemonModel';
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

  aux: number = 0
  region: string = 'hoenn'
  public pokemons: PokemonKanto[]
  public numberHoenn: number = 252
  public pokemonsWithUrl: PokemonWithImgUrl[] = []
  public pokemonWithUrl: PokemonWithImgUrl

  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {
    this.pokedexService.getAllPokemonsKanto(environment.pokemonHoenn)
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
        this.pokemonWithUrl.imgUrl = `${environment.linkCdn}/${this.numberHoenn + this.aux}.png`

        this.pokemonsWithUrl.push(this.pokemonWithUrl)
        this.aux++
      });
    }
  }
}
