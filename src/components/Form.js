import React, { Component } from 'react';

class Form extends Component {
    render() {
      return (
        <form onSubmit={this.props.getPokemon}>
           <input type="text" name="name" placeholder="name..."/>
           
           <button>Get Pokemon</button>
        </form>
      );
    }
  }
  
  export default Form;