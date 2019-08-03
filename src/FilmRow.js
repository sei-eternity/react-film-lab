import React, { Component } from 'react';

class FilmRow extends Component {
  render() {
    const year = new Date(this.props.film.release_date);

    return (
      <div>
        <div className="film-row">
          <img src={this.props.film.poster_path} alt="" />

          <div className="film-summary">
            <h1>{this.props.film.title}</h1>
            <p>{year.getFullYear()}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default FilmRow