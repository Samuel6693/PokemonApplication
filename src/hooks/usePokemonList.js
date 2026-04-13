import { useEffect, useState } from "react";
import { fetchPokemonList } from "../api/pokemon";

const usePokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const getPokemons = async () => {
            try {
                setIsLoading(true);
                setError('');

                const data = await fetchPokemonList();
                setPokemons(data);
            } catch (error) {
                setError('Could not load Pokemon list. Please try again.');
                console.error('Error fetching pokemon list:', error);
            } finally {
                setIsLoading(false);
            }
        }
        getPokemons();
    }, []);
    return {pokemons, isLoading, error};
}

export default usePokemonList;