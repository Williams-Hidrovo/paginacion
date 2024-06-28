import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interface';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
})
export class PokemonListComponent implements OnInit {
  public pagina: number = 0;
  public pokemons: Pokemon[] = [];
  public cantidadPages: number = 0;
  public arrayPaginas: number[] = [];
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.pokemonService.getPokemons().subscribe((resp) => {
      this.pokemons = resp;
      this.cantidadPages = this.pokemons.length;
      this.arrayPaginas = Array(this.cantidadPages)
        .fill(0)
        .map((_, i) => i);
    });
  }

  public nextPage() {
    this.pagina += 5;
    console.log(this.pagina);
  }

  public backPage() {
    if (this.pagina < 5) {
      console.log(this.pagina);
      return;
    }
    this.pagina -= 5;
  }

  public saltarPagina(n: number) {
    this.pagina = n * 5;

    console.log(this.pagina);
  }
}
