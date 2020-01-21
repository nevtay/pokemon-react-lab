import React from "react";
import "./PokemonType.css"

const getTypeClassName = type => {
    return String(type.toLowerCase());
}

export const PokemonType = ({ type }) => {
    return <span className={`pokemon-card__type ${getTypeClassName(type)}`}>{type}</span>
}