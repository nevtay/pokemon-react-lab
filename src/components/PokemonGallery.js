import React, { Component } from "react";
import PokemonData from "../pokemon/pokemon";
import PokemonCard from "./PokemonCard";
import "./PokemonGallery.css";
import PokemonSearchBar from "../container/PokemonSearchBar"

class PokemonGallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
        }
    }

    showResults = (event) => {
        this.setState(
            { value: event.target.value }
        )
    }

render() {
    
    if (this.state.value !== "") {
        const pokemonfilteredData = PokemonData.filter(pkmn => {
            return pkmn.name.english.toLowerCase().startsWith(this.state.value.toLowerCase())
        });

        return (  
            <div>
                <h1 className="PokemonGallery_title">Pokemon Gallery</h1>
                <PokemonSearchBar onChange={this.showResults} value={this.state.value} />
                <p className="PokemonGallery_showResults__title">Showing <span className="PokemonGallery_showResults__number">{pokemonfilteredData.length}</span> result(s):</p>
                <div className="PokemonGallery">
                    {pokemonfilteredData.map(pkmn => {
                        return <PokemonCard pokemon={pkmn} />
                    })}
                </div>
            </div>  
        )
    } else if (this.state.value === "") {
    return (  
        <div>
            <div className="PokemonGallery_title">Pokemon Gallery</div>
            <PokemonSearchBar onChange={this.showResults} value={this.state.value} />
            <div className="PokemonGallery">
                {PokemonData.map(pkmn => {
                    return <PokemonCard pokemon={pkmn} />
                })}
            </div>
        </div>
        )}
    }
}

export default PokemonGallery