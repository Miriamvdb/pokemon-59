import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import PokemonBlock from "../components/PokemonBlock";

export default function PokemonDiscoveryPage() {
  const [pokeList, setPokeList] = useState(null);
  const [filter, setFilter] = useState(""); // FILTERING
  const routeParams = useParams();
  const navigate = useNavigate(); // NAVIGATING

  useEffect(() => {
    const getPokemons = async () => {
      const pokeResponse = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      setPokeList(pokeResponse.data.results);
    };
    getPokemons();
    if (routeParams.filter) {
      setFilter(routeParams.filter);
    } else {
      setFilter("");
    }
  }, []);

  // FILTERING
  const updateFilter = (e) => {
    setFilter(e.target.value);
    navigate(`/${e.target.value}`); // NAVIGATING
  };

  // FILTERING (the <input/> part)
  return (
    <div>
      <input type="text" value={filter} onChange={updateFilter} />
      <br />
      {pokeList ? (
        pokeList
          .filter((pokemonObject) => pokemonObject.name.startsWith(filter)) // FILTERING
          .map((pokemonObject, i) => (
            <PokemonBlock key={i} name={pokemonObject.name} />
          ))
      ) : (
        <p>Loading ..</p>
      )}
    </div>
  );
}
