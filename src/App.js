import React from "react";
import "./App.css";
import PokemonGallery from "./components/PokemonGallery"
import PokemonData from "./pokemon/pokemon";

function App() {
  return (
    <div className="App">
      <PokemonGallery></PokemonGallery>
    </div>
  );
}

export default App;
