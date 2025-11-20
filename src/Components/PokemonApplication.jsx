import { useEffect, useState } from 'react';

const PokemonApplication = () => {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        const getPokemons = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        const json = await response.json();
        setPokemons(json);
        console.log(json.results)
        };

        getPokemons();
    },[])

    return (
        <div>
           <h2>Här kommer dropdown pokemon list</h2>
        </div>
    )
}

export default PokemonApplication