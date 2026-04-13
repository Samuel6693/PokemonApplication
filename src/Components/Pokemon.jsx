const Pokemon = ({ pokemon }) => {
  
  return (
    <div className="pokemon-card">
      <p className="pokemon-id">#{pokemon.id}</p>
      <h2 className="pokemon-name">{pokemon.name}</h2>
      <img
        src={
          pokemon.sprites.other['official-artwork'].front_default || 
          pokemon.sprites.front_default
        }
        alt={pokemon.name}
        className="pokemon-image"
      />

      <div className="pokemon-info">
        <div className="pokemon-stats">
          <div className="stat-box">
            <span className="label">Height</span>
            <p>{pokemon.height}</p>
          </div>

          <div className="stat-box">
            <span className="label">Weight</span>
            <p>{pokemon.weight}</p>
          </div>
        </div>

        <p className="label">Types</p>
        <ul className="type-list">
          {pokemon.types.map((typeInfo) => (
            <li key={typeInfo.type.name} className={`type-item type-${typeInfo.type.name}`}>
              {typeInfo.type.name}
            </li>
          ))}
        </ul>

        <p className="label">Abilities</p>
        <ul className="ability-list">
          {pokemon.abilities.map((abilityInfo) => (
            <li key={abilityInfo.ability.name} className="ability-item">
              {abilityInfo.ability.name}
            </li>
          ))}
        </ul>

        <p className="label">Base Stats</p>
        <ul className="stats-list">
          {pokemon.stats.map((statInfo) => (
            <li
              key={statInfo.stat.name}
              className="stats-item"
              style={{
                backgroundColor:
                  statInfo.base_stat >= 80
                    ? '#d1fae5'
                    : statInfo.base_stat >= 60
                    ? '#dbeafe'
                    : '#fef3c7',
              }}
            >
      <span className="stat-name">
        {statInfo.stat.name.replace('-', ' ').replace('hp', 'HP')}
      </span>
      <span className="stat-value">{statInfo.base_stat}</span>
    </li>
  ))}
</ul>


      </div>
    </div>
  );
};

export default Pokemon;
