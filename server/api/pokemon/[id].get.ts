import {
  IPokemonAbilitiesResponse,
  IPokemonResponse,
  PokemonStats,
} from "../interfaces/PokemonInterface";

const API = "https://pokeapi.co/api/v2";

export default defineEventHandler(async (event) => {
  const { id: pokemonId } = getQuery(event);

  const pokemonData = await $fetch<IPokemonResponse>(
    `${API}/pokemon/${pokemonId}`
  );

  let speciesData = null;
  try {
    speciesData = await $fetch<IPokemonAbilitiesResponse>(
      `${API}/ability/${pokemonId}`
    );
  } catch (err) {
    console.log(`No abilities found for pokemon ${pokemonId}`);
  }

  const stats = pokemonData.stats.reduce<{ [keyof: string]: number }>(
    (amount, statData) => {
      amount[statData.stat.name] = statData.base_stat;

      return amount;
    },
    {}
  ) as any as PokemonStats;

  let effectEntries = ["?"];
  if (speciesData) {
    effectEntries = speciesData.effect_entries
      .filter(({ language }) => language.name === "en")
      .map((flavorText) => flavorText.short_effect);
  }

  const pokemon = {
    id: pokemonData.id,
    stats,
    effectEntries,
    name: pokemonData.name,
    types: pokemonData.types.map((pokemonType) => pokemonType.type.name),
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`,
  };

  return pokemon;
});
