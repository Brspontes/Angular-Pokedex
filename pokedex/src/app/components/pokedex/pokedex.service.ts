import { environment } from './../../../environments/environment.prod';
import { PokemonKanto } from './../../models/pokemonModel';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { catchError, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private http: HttpClient) { }

  getAllPokemonsKanto(): Observable<any> {
    return this.http.get<any>(`${environment.pokemonKanto}`).pipe()
  }
}
