import React, { Component } from 'react';

class Pokemon extends Component {
  render() {
    const { name, type, weight, image } = this.props;
    return (
      <div>
        <p>{ name }</p>
        <p>{ type }</p>
        <p>{ `Average weight: ${weight.value} ${weight.measurementUnit}` }</p>
        <img src= { image } alt= { name } />
      </div>
    );
  }
}

export default Pokemon;
