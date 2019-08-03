import React, { Component } from 'react';

class FilmRow extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.film.title}</h1>
      </div>
    )
  }
}

export default FilmRow