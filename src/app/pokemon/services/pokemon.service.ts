import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Pokemon, ResultPokemon } from '../interfaces/pokemon.interface';

const url = 'https://pokeapi.co/api/v2/pokemon/?limit=500';
@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemons(): Observable<Pokemon[]> {
    return this.http
      .get<ResultPokemon>(url)
      .pipe(map((resp) => this.mapperPokemon(resp)));
  }

  private mapperPokemon(resp: ResultPokemon): Pokemon[] {
    const Pokemonlist: Pokemon[] = resp.results.map((poke) => {
      const url = poke.url.split('/');
      const id = url[6];
      return {
        id: id,
        name: poke.name,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
      };
    });

    return Pokemonlist;
  }
}
