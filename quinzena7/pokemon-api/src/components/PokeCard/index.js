import React, { useState, useEffect } from "react";
import axios from "axios";

function PokeCard(props) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    pegaPokemon(props.pokemon);
  }, [props.pokemon]);

  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const pokemonAtual = pokemon;

  return (
    <div>
      <p>{pokemonAtual.name}</p>
      <p>{pokemonAtual.weight} Kg</p>
      {pokemonAtual.types && <p>{pokemonAtual.types[0].type.name}</p>}
      {pokemonAtual.sprites && (
        <img src={pokemonAtual.sprites.front_default} alt={pokemonAtual.name} />
      )}
    </div>
  );
}

export default PokeCard;
