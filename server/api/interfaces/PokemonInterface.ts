export interface IPokemonsResponse {
  count: number;
  next: string;
  previus: string;
  results: {
    name: string;
    url: string;
  }[];
}

export interface IPokemonResponse {
  types: {
    type: {
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  name: string;
  id: number;
}
export interface IPokemonAbilitiesResponse {
  id: number;
  name: string;
  effect_entries: {
    language: {
      name: string;
    };
    effect: string;
    short_effect: string;
  }[];
}
