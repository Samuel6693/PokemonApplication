import { useState } from 'react';
import Pokemon from './Pokemon.jsx';
import { fetchPokemonDetails } from '../api/pokemon.js';
import usePokemonList from '../hooks/usePokemonList.js';

const PokemonApplication = () => {
  const { pokemons, isLoading, error: listError } = usePokemonList();
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const [search, setSearch] = useState('');
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);
  const [detailsError, setDetailsError] = useState('');

  const handleClick = async () => {
    if (!selectedPokemon) return;

    try {
      setIsLoadingDetails(true);
      setDetailsError('');
      setPokemonDetails(null);

      const data = await fetchPokemonDetails(selectedPokemon);
      setPokemonDetails(data);
    } catch (error) {
      setDetailsError('Could not load Pokemon details. Please try again.');
      console.error('Error fetching pokemon details:', error);
    } finally {
      setIsLoadingDetails(false);
    }
  };

  const filteredPokemons = pokemons
  .filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  )
  .sort((a, b) => a.name.localeCompare(b.name));


  return (
    <section className="pokemon-app">
      <div className="controls">
        <h2 className="section-title">Choose a Pokemon</h2>
      
        <input 
          type='text' 
          placeholder='Search Pokemon' 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          className='search-input'/>

        {search && filteredPokemons.length === 0 && (
            <p className="status-message">No Pokemon found matching "{search}".</p>
          )}

        <select
          name="pokemons"
          id="pokemons-dropdown"
          value={selectedPokemon}
          onChange={(e) => setSelectedPokemon(e.target.value)}
          className="select"
        >

          <option value="">Select a Pokemon</option>
          {filteredPokemons.map((pokemon) => (
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
        {isLoading && <p className="status-message">Loading Pokemon list...</p>}

        {!isLoading && listError && (
          <p className="status-message error-message">{listError}</p>
        )}

        {!isLoading && !listError && detailsError && (
          <p className="status-message error-message">{detailsError}</p>
        )}

        {!isLoading && !listError && isLoadingDetails && (
          <p className="status-message">Loading details...</p>
        )}

        {!isLoading && !listError && !detailsError && !isLoadingDetails && !pokemonDetails && (
          <p className="status-message">Select a Pokemon to see details.</p>
        )}

        {!isLoading && !listError && !detailsError && pokemonDetails && (
          <Pokemon pokemon={pokemonDetails} />
        )}
      </div>
      
    </section>
  );
};

export default PokemonApplication;
