export interface ResultPokemon {
  count: number;
  next: string;
  previous: null;
  results: smallPokemon[];
}

export interface smallPokemon {
  name: string;
  url: string;
}

export interface Pokemon {
  id: string;
  name: string;
  img: string;
}
