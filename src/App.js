import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ListPokemon from "./components/ListPokemon";
import ListMorePokemon from "./components/ListMorePokemon";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);
  console.log(limit);

  console.log(pokemonList);

  function fetchData(limit) {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        const newList = [...pokemonList, ...data.results];
        setPokemonList(newList);
        setOffset((pre) => pre + limit);
      })
      .catch(() => console.log("Lỗi!"));
  }

  function handleFetchMore() {
    const newLimit = parseInt(limit);
    if (!isNaN(newLimit) && newLimit > 0) {
      fetchData(newLimit);
      setLimit("");
    } else {
      alert("lớn hơn 0");
    }
  }

  return (
    <div>
      <ListPokemon pokemonList={pokemonList} offset={offset} />,
      <ListMorePokemon
        limit={limit}
        onInputChange={(e) => setLimit(e.target.value)}
        handleFetchMore={handleFetchMore}
      />
    </div>
  );
}

export default App;
