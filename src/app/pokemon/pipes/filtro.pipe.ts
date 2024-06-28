import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interface';

@Pipe({
  name: 'filtro',
})
export class FiltroPipe implements PipeTransform {
  transform(value: Pokemon[], page: number = 0): Pokemon[] {
    return value.slice(page, page + 5);
  }
}
