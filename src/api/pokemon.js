const BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemonList = async () => {
    const response = await fetch(`${BASE_URL}/pokemon?limit=151`);

    if (!response.ok) {
        throw new Error('Could not fetch pokemon list');
    }

    const json = await response.json();
    return json.results;
}

const pokemonDetailsCache = {};

export const fetchPokemonDetails = async (pokemonName) => {
    if (pokemonDetailsCache[pokemonName]) {
        return pokemonDetailsCache[pokemonName];
    }

    const response = await fetch(`${BASE_URL}/pokemon/${pokemonName}`);

    if (!response.ok) {
        throw new Error('Could not fetch pokemon details')
    }

    const data = await response.json();
    pokemonDetailsCache[pokemonName] = data;

    return data;
}

