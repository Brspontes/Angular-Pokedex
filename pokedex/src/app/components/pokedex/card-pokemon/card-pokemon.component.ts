import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './../modal/modal.component';
import { environment } from './../../../../environments/environment';
import { PokemonKanto } from './../../../models/pokemonModel';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent implements OnInit {

  @Input() region: string
  @Input() pokemon: string
  @Input() iteration: number
  
  public pokemons: PokemonKanto[]
  public url = environment.linkCdn
  public numberJotho: number = 152
  public numberHoenn: number = 252

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {}

  openModal(): void {
    this.modalService.open(ModalComponent,  { centered: true, backdropClass: 'light-blue-backdrop' })
  }
}