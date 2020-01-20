import React from "react";
import "./PokemonType.css"

const getTypeClassName = type => {
    return String(type.toLowerCase());
    // switch (type.toLowerCase()) {
    //     case("fire"):
    //         return "fire";
    //     case("water"):
    //         return "water";
    //     case("grass"):
    //         return "grass";
    //     case("flying"):
    //         return "flying";
    //     default:
    //         return "unknown";
    // }
}

export const PokemonType = ({ type }) => {
    return <span className={`pokemon-card__type ${getTypeClassName(type)}`}>{type}</span>
}