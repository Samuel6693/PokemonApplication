const Pokemon = ({ pokemon }) => {
  
  return (
    <div className="pokemon-card">
      <h2 className="pokemon-name">{pokemon.name}</h2>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="pokemon-image"
      />

      <div className="pokemon-info">
        <p>
          <span className="label">Weight:</span> {pokemon.weight}
        </p>
        <p>
          <span className="label">Height:</span> {pokemon.height}
        </p>

        <p className="label">Types:</p>
        <ul className="type-list">
          {pokemon.types.map((typeInfo) => (
            <li key={typeInfo.type.name} className="type-item">
              {typeInfo.type.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pokemon;
