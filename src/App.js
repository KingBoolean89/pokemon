
import React, { Component } from 'react';
import Pokemon from './components/Pokemon';
import AddPokemon from './components/AddPokemon';
import uuid from 'uuid';
import axios from 'axios';

import './App.css';

class App extends Component {
	state = {
		pokemon: []
	};

	componentDidMount() {
		axios
			.get('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20')
			.then((res) => this.setState({ pokemon: res.data.results }));
	}

	// Toggle Complete
	markCaught = (id) => {
		this.setState({
			pokemon: this.state.pokemon.map((pokemon) => {
				if (pokemon.id === id) {
					pokemon.caught = !pokemon.caught;
				}
				return pokemon;
			})
		});
	};

	// Delete pokemon
	delpokemon = (id) => {
		axios
			.delete(`https://pokeapi.co/api/v2/pokemon/${id}`)
			.then((res) =>
				this.setState({
					pokemon: [...this.state.pokemon.filter((pokemon) => pokemon.id !== id)]
				})
			);
	};

	// Add pokemon
	addpokemon = (name) => {
		axios
			.post('https://pokeapi.co/api/v2/pokemon', {
				name,
				caught: false
			})
			.then((res) => {
				res.data.id = uuid.v4();
				this.setState({ pokemon: [...this.state.pokemon, res.data.results] });
			});
	};

	render() {
		return (
				<div className='App'>
					<div className='container'>
								<React.Fragment>
									<Addpokemon addpokemon={this.addpokemon} />
									<Pokemon
										pokemon={this.state.pokemon}
										markCaught={this.markCaught}
										delpokemon={this.delpokemon}
									/>
								</React.Fragment>
							)}
						/>
					</div>
				</div>
		
		);
	}
}

export default App;