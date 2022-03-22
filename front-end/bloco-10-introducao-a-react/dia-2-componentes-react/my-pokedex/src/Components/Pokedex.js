import React, { Component } from 'react';
import pokemons from '../data/data';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {

    return (
      <div>
        {pokemons.map((pokemon) => (
          <Pokemon
          key={ pokemon.id }
          name={ pokemon.name }
          type={ pokemon.type }
          weight={ pokemon.averageWeight }
          image={ pokemon.image }
          />))}
      </div>
    );
  }
}

export default Pokedex;
