import React from 'react';



class Pokemon extends React.Component {
  render() {
    return (
      <div>
     	{this.props.name &&this.props.isFalse&& <p>Name: { this.props.name }</p>} 
     	{this.props.error && <p>{ this.props.error }</p>} 
      </div>
    );
  }
}

export default Pokemon;