import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './../modal/modal.component';
import { PokemonWithImgUrl } from './../../../models/pokemonModel';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent implements OnInit {

  @Input() pokemon: PokemonWithImgUrl
  @Input() iteration: number
  @Input() imgUrl: string

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {}

  openModal(pokemon: PokemonWithImgUrl): void {
    this.modalService.open(ModalComponent,  { centered: true, backdropClass: 'light-blue-backdrop', size:'xl' })
      .componentInstance.pokemon = pokemon
  }
}