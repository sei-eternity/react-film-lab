import React from 'react';
import './App.css';
import FilmDetails from './FilmDetails.js';
import FilmListing from './FilmListing.js';
import TMDB from './TMDB.js';

function App() {
  return (
    <div className="App">
      <div className="film-library">
        <FilmListing films={TMDB.films} />
        <FilmDetails films={TMDB.films} />
      </div>
    </div>
  );
}

export default App;
