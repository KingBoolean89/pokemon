import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddPokemon extends Component {
  state = {
    name: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addPokemon(this.state.name);
    this.setState({ name: '' });
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input 
          type="text" 
          name="name" 
          style={{ flex: '10', padding: '5px' }}
          placeholder="Add Pokemon ..." 
          value={this.state.name}
          onChange={this.onChange}
        />
        <input 
          type="submit" 
          value="Submit" 
          className="btn"
          style={{flex: '1'}}
        />
      </form>
    )
  }
}

// PropTypes
AddPokemon.propTypes = {
  addPokemon: PropTypes.func.isRequired
}

export default AddPokemon