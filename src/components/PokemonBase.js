import React from "react";
import "./PokemonBase.css";

const PokemonBase = ({ stats }) => {
    return (
        <div className="pokemon-card__statsContainer">
              <span className="pokemon-card__statsContainer_statType"> {stats[0]}</span>
              <span className="pokemon-card__statsContainer_statValue"> {stats[1]} </span>
        </div>
    )
}

export default PokemonBase