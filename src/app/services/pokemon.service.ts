import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient
  ) {}

  API_URL: string = 'https://pokeapi.co/api/v2/';

  getPokemonList(offset: number = 0, limit: number = 0): Observable<any> {
    return this.http.get(`${this.API_URL}pokemon?offset=${offset}&limit=${limit}`);
  }

  getPokemonInfo(id: string = '1'): Observable<any> {
    return this.http.get(`${this.API_URL}pokemon/${id}`);
  }

}
