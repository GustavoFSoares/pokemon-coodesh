import {
  IPokemonAbilitiesResponse,
  IPokemonResponse,
} from "../interfaces/PokemonInterface";

const API = "https://pokeapi.co/api/v2/";

export default defineEventHandler(async (event) => {
  const { id: pokemonId } = getQuery(event);

  const pokemonData = await $fetch<IPokemonResponse>(
    `${API}/pokemon/${pokemonId}`
  );

  const speciesData = await $fetch<IPokemonAbilitiesResponse>(
    `${API}/ability/${pokemonId}`
  );

  const stats = pokemonData.stats.reduce<{ [keyof: string]: number }>(
    (amount, statData) => {
      amount[statData.stat.name] = statData.base_stat;

      return amount;
    },
    {}
  );

  let effectEntries = ["?"];
  if (speciesData) {
    effectEntries = speciesData.effect_entries
      .filter(({ language }) => language.name === "en")
      .map((flavorText) => flavorText.short_effect);
  }

  const pokemon = {
    id: pokemonId,
    stats,
    effectEntries,
    name: pokemonData.name,
    types: pokemonData.types.map((pokemonType) => pokemonType.type.name),
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`,
  };

  return pokemon;
});
