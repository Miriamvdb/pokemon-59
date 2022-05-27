import { NavLink } from "react-router-dom";

export default function PokemonBlock({ name }) {
  return (
    <div>
      <NavLink to={`/details/${name}`}>{name}</NavLink>
    </div>
  );
}
