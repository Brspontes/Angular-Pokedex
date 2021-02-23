import { PokemonWeaknesses } from './../../../models/pokemonModel';
import { environment } from 'src/environments/environment';
import { PokedexService } from './../pokedex.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PokemonWithImgUrl } from 'src/app/models/pokemonModel';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  
  @Input() pokemon: PokemonWithImgUrl
  
  closeResult: string;
  response: any = []
  pokemonWeaknesses: PokemonWeaknesses[] = []

  constructor(public activeModal: NgbActiveModal, private pokemonService: PokedexService) { }

  ngOnInit(): void {
    this.pokemonService.getInfoPokemon(this.pokemon.url.toString())
      .subscribe(success => { 
        this.response = success
        this.getWeakness()
        console.log(this.pokemonWeaknesses)
      }, error => console.log(error))  
  }

  getWeakness(): void {
    this.pokemonService.getWeaknessesPokemon(`${environment.pokemonWeaknesses}/${this.response.types[0].type.name}`)
      .subscribe(success => {
        success.damage_relations.double_damage_from.forEach(element => {
          this.pokemonWeaknesses.push(element)
        });
      }, error => console.log(error))
  }
}
