import {
  IPokemonTypeResponse,
  IPokemonsResponse,
} from "../interfaces/PokemonInterface";

const API = "https://pokeapi.co/api/v2/";
/* 
  const repo = await $fetch('https://api.github.com/repos/nuxt/nuxt', {
    headers: {
      Authorization: `token ${config.githubToken}`
    }
  })
*/

/* const { data } = await axios.get(`${getters.apiUrl}/pokemon/${id}`);

  const pokemonData = {
    id,
    types: data.types.map((pokemonType) => pokemonType.type.name),
  };
  commit("STORE_SPECIFIC_POKEMONS", pokemonData);
  */

async function getPokemonTypes(pokemonId: string): Promise<string[]> {
  const data = await $fetch<IPokemonTypeResponse>(
    `${API}/pokemon/${pokemonId}`
  );

  return data.types.map((pokemonType) => pokemonType.type.name);
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  let offset = null;
  if (query) {
    offset = query.offset;
  }

  const data = await $fetch<IPokemonsResponse>(`${API}/pokemon`, {
    params: {
      offset,
      limit: 151,
    },
  });

  const mappedPokemons = data.results.map((pokemon) => {
    let [pokemonId] = pokemon.url.match(/\d+\/$/g) ?? [];

    if (!pokemonId) {
      console.error(`Doent found ID to pokemon ${pokemon.name}`);
      throw new Error(`Doent found ID to pokemon ${pokemon.name}`);
    }

    pokemonId = pokemonId.replace("/", "");

    return {
      id: pokemonId,
      name: pokemon.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`,
      types: [],
    };
  });

  const pokemonsWithTypePromise = mappedPokemons.map(async (pokemon) => {
    const types = await getPokemonTypes(pokemon.id);

    return {
      ...pokemon,
      types,
    };
  });

  const pokemonsWithType = await Promise.all(pokemonsWithTypePromise);

  return pokemonsWithType;
});
