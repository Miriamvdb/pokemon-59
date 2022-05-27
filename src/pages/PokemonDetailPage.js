import { useParams } from "react-router-dom";

export default function PokemonDetailPage() {
  const routeParams = useParams();

  return <p>{routeParams.pokemonName}</p>;
}
