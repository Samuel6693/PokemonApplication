import { useEffect, useState } from 'react';
import Pokemon from './Pokemon';

const PokemonApplication = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const json = await response.json();
        setPokemons(json.results);
      } catch (error) {
        console.error('Error fetching pokemon list:', error);
      }
    };

    getPokemons();
  }, []);

  const handleClick = async () => {
    if (!selectedPokemon) return;

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
      );
      const data = await response.json();
      setPokemonDetails(data);
    } catch (error) {
      console.error('Error fetching pokemon details:', error);
    }
  };

  return (
    <div className="pokemon-app">
      <h2 className="section-title">Pokemon list</h2>

      <div className="controls">
        <select
          name="pokemons"
          id="pokemons-dropdown"
          value={selectedPokemon}
          onChange={(e) => setSelectedPokemon(e.target.value)}
          className="select"
        >
          <option value="">-- Select a Pokemon --</option>
          {pokemons.map((pokemon) => (
            <option key={pokemon.name} value={pokemon.name}> 
              {pokemon.name}
            </option>
          ))}
        </select>

        <button
          onClick={handleClick}
          disabled={!selectedPokemon}
          className="primary-button"
        >
          Get Pokemon data
        </button>
      </div>

      {pokemonDetails && <Pokemon pokemon={pokemonDetails} />}
    </div>
  );
};

export default PokemonApplication;
