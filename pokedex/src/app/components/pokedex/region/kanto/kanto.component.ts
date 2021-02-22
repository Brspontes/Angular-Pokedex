import { PokemonWithImgUrl } from './../../../../models/pokemonModel';
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

  aux: number = 0
  public pokemons: PokemonKanto[]
  public pokemonsWithUrl: PokemonWithImgUrl[] = []
  public pokemonWithUrl: PokemonWithImgUrl

  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {
    this.pokedexService.getAllPokemonsKanto(environment.pokemonKanto)
        .subscribe(
          success => {
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
        this.pokemonWithUrl.imgUrl = this.imgUrl(this.aux)

        this.pokemonsWithUrl.push(this.pokemonWithUrl)
        this.aux++
      });
    }
  }

  private imgUrl(index: number): string {
    if(index <= 8)
      return `${environment.linkCdn}/00${index + 1}.png`
    else if (index >= 9 && index < 98)
      return `${environment.linkCdn}/0${index + 1}.png`
    else if (index > 99)
      return `${environment.linkCdn}/${index + 1}.png`
  }
}
