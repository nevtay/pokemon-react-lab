import React from "react";
import "../components/PokemonGallery";
import "./PokemonSearchBar.css"

const PokemonSearchBar = (props) => {
        return (
            <div className="pokemon_searchBar">
                <input 
                className="pokemon_searchBar"
                type="text"
                value={props.value}
                onChange={props.onChange}
                placeholder="Search!"
                />
        </div>      
    )
}

export default PokemonSearchBar