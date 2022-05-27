import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import PokemonDetailPage from "./pages/PokemonDetailPage";
import PokemonDiscoveryPage from "./pages/PokemonDiscoveryPage";

function App() {
  return (
    <div className="App">
      <h1>◓ Pokemon Discovery ◓</h1>
      <div className="AppNav">
        <NavLink className="NavElement" end to="/">
          Home
        </NavLink>
      </div>
      <br />
      <Routes>
        <Route path="/" element={<PokemonDiscoveryPage />}>
          <Route path=":filter" element={<PokemonDiscoveryPage />} />
        </Route>
        <Route path="/details/:pokemonName" element={<PokemonDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
