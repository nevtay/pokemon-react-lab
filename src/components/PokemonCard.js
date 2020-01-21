import React from "react";
import "./PokemonCard.css"
import { PokemonType } from "./PokemonType";
import PokemonBase from "./PokemonBase";

function PokemonCard({ pokemon }) {
  const { id, name, type, base } = pokemon;
    return (
      <div className="pokemon-card">
        <img className="pokemon-card__img" src={`${process.env.PUBLIC_URL}/pokemonImage/${id}.png`}></img>
        <span className="pokemon-card__idNumber">#{id}</span>
        <div className="pokemon-card__name">
          {
            <div>
            <p className="englishName">{name.english}</p>
            </div>
          }
        </div>
        <div className="pokemon-card__type_container">
          {type.map(t => 
            <PokemonType type={t} /> 
            )}
        </div>
        <div className="pokemon-card__stats">
          {Object.entries(base).map(stat =>
            <PokemonBase stats={stat} />
            )
          }
        </div>
        <script>
      </script>
      </div>
        
    );
  }

  export default PokemonCard