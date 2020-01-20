import React from "react";
import PokemonData from "../pokemon/pokemon";
import PokemonCard from "./PokemonCard";
import "./PokemonGallery.css";


export default() => { 
    return (
        <div>
            <h1>Welcome to my pokemon gallery!</h1>
            <div className="PokemonGallery">
                {PokemonData.map(pkmn => {
                    return <PokemonCard pokemon={pkmn} />
                })}
            </div>
        </div>
    )
}