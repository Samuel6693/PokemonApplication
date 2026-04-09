import { useEffect, useState } from 'react';
import Pokemon from './Pokemon';

const PokemonApplication = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [isLoadingList, setIsLoadingList] = useState(true);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const getPokemons = async () => {
      try {
        setIsLoadingList(true);
        setError('');

        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        
        if (!response.ok) {
          throw new Error('Could not fetch pokemon list');
        }
        
        const json = await response.json();
        setPokemons(json.results);
      } catch (error) {
        setError('Could not load Pokemon list. Please try again.');
        console.error('Error fetching pokemon list:', error);
      } finally {
        setIsLoadingList(false);
      }
    };

    getPokemons();
  }, []);

  const handleClick = async () => {
    if (!selectedPokemon) return;

    try {
      setIsLoadingDetails(true);
      setError('');
      setPokemonDetails(null);

      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
      );

      if (!response.ok) {
        throw new Error('Could not fetch pokemon details');
      }

      const data = await response.json();
      setPokemonDetails(data);
    } catch (error) {
      setError('Could not load Pokemon details. Please try again.');
      console.error('Error fetching pokemon details:', error);
    } finally {
      setIsLoadingDetails(false);
    }
  };

  return (
    <section className="pokemon-app">
      <div className="controls">
        <h2 className="section-title">Choose a Pokemon</h2>

      
        <select
          name="pokemons"
          id="pokemons-dropdown"
          value={selectedPokemon}
          onChange={(e) => setSelectedPokemon(e.target.value)}
          className="select"
        >
          <option value="">Select a Pokemon</option>
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
          View details
        </button>
      </div>

      <div className='results'>
        {isLoadingList && <p className='status-message'>Loading Pokemon list...</p>}

        {isLoadingList && error && <p className='status-message error-message'>{error}</p>}

        {isLoadingList && !error && isLoadingDetails && (
          <p className='status-message'>Loading details...</p>
        )}

        {!isLoadingList && !error && !isLoadingDetails && !pokemonDetails && (
          <p className='status-message'>Select a Pokemon to see details.</p>
        )}
        
        {!isLoadingList && !error && pokemonDetails && (
          <Pokemon pokemon={pokemonDetails} />
        )}
      </div>
      
    </section>
  );
};

export default PokemonApplication;
