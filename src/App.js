
import './App.css';
import React, { Component } from 'react';
import Form from './components/Form'
import './App.css';
import Pokemon from './components/Pokemon';

class App extends Component {

  state = {
    name: "",
    isSeen: false,
    
  }
  

  getPokemon = async (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    
    const api_call = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await api_call.json();
    if (name){
    console.log(data);
    this.setState({
      name:data.results,
      isSeen:true,
      error:""
    });
  }else{this.setState({
      name: undefined,
    error: "Please enter Name"
    });

  }
 } 
  render() {
    return (
      <div className="App">
        
        <Form getPokemon={this.getPokemon} />
        <Pokemon 
          name={this.state.name}
          error={this.state.error}
          
         />
      </div>
    );
  }
}
export default App
