export interface IPokemonsResponse {
  count: number;
  next: string;
  previus: string;
  results: {
    name: string;
    url: string;
  }[];
}

export interface IPokemonTypeResponse {
  types: {
    type: {
      name: string;
    };
  }[];
}
