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

  constructor(public activeModal: NgbActiveModal, private pokemonService: PokedexService) { }

  ngOnInit(): void {
    this.pokemonService.getInfoPokemon(this.pokemon.url.toString())
      .subscribe(success => { 
        this.response = success
        console.log(this.response)
      }, error => console.log(error))
  }
}
