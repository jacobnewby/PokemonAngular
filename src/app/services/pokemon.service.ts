import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const Api_Url = 'https://pokeapi.co'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemon(id) {
    return this.http.get(`${Api_Url}/pokemon/${id}`);
  }

  getAll() {
    return this.http.get(`${Api_Url}/api/v2/pokemon/?offset=0&limit=150`)
  }
}
