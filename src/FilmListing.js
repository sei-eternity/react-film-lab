import React, { Component } from 'react';

class FilmListing extends Component {
  render() {
    const allFilms = this.props.films.map((film, index) => {
      return <h1 key={index}>{film.title}</h1>
    })

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        {allFilms}
      </div>
    )
  }
}

export default FilmListing