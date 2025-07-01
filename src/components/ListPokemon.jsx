function ListPokemon({ pokemonList }) {
  return (
    <div>
      <h1>Pokemon List</h1>
      <div id="pokemon-container">
        {pokemonList.map((pokemon, index) => (
          <div key={index} className="card">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                index + 1
              }.png`}
              alt={pokemon.name}
            />
            <p>
              {index + 1}. {pokemon.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListPokemon;
