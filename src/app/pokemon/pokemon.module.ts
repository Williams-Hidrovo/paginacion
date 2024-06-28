import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FiltroPipe } from './pipes/filtro.pipe';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [PokemonListComponent, FiltroPipe],
  imports: [CommonModule],
  exports: [PokemonListComponent],
})
export class PokemonModule {}
