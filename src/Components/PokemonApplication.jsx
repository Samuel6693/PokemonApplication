import { useEffect, useState } from 'react';
import Pokemon from './Pokemon';

const PokemonApplication = () => {

    const [pokemons, setPokemons] = useState([])
    const [selectedPokemon, setSelectedPokemon] = useState("");
    const [pokemonDetails, setPokemonDetails] = useState(null);

    useEffect(() => {
        const getPokemons = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        const json = await response.json();
        const data = json.results;
        setPokemons(data);
        };
        
        getPokemons();
    },[])

    const handleClcick = async () => {
        if (!selectedPokemon) return;
        const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`);
        const data = await response.json();
        setPokemonDetails(data);
    }

    return (
        <div>
           <h2>Pokemon lista</h2>
            <select 
                name="pokemons" 
                id="pokemons-dropdown" 
                value={selectedPokemon} 
                onChange={(e) => setSelectedPokemon(e.target.value)}>

                <option value="">--Välj en Pokemon--</option>
                {pokemons.map ((pokemon) => (
                    <option key={pokemon.name} value={pokemon.name}>{pokemon.name}
                    </option>
                ))}
            </select>
            <button
                onClick={() => {handleClcick()}}
                disabled={!selectedPokemon}>
                Hämta Pokemon-data
            </button>
            {pokemonDetails && <Pokemon pokemon={pokemonDetails}/>}
               
        </div> 
    )
}

export default PokemonApplication