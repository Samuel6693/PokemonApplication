const Pokemon = ({pokemon}) => {
    return (
        <div>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Weight: {pokemon.weight}</p>
            <p>Height: {pokemon.height}</p>
            <p>Types:</p>
            <ul>
                {pokemon.types.map(typeInfo => <li key={typeInfo.type.name}> 
                    {typeInfo.type.name}
                </li>)}
            </ul>
        </div>
    )
}

export default Pokemon;