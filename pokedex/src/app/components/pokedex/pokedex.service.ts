import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private http: HttpClient) { }

  getAllPokemonsKanto(url: string): Observable<any> {
    return this.http.get<any>(url).pipe()
  }
}
