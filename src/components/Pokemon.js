import React, { Component } from 'react';
import PokemonItem from './PokemonItem';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    return this.props.pokemon.map((pokemon) => (
      <PokemonItem key={pokemon.id} pokemon={pokemon} markCaught={this.props.markCaught} delPokemon={this.props.delPokemon} />
    ));
  }
}

// PropTypes
Pokemon.propTypes = {
  pokemon: PropTypes.array.isRequired,
  markCaught: PropTypes.func.isRequired,
  delPokemon: PropTypes.func.isRequired,
}

export default Pokemon;