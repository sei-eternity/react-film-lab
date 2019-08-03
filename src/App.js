import React from 'react';
import './App.css';
import FilmDetails from './FilmDetails.js';
import FilmListing from './FilmListing.js';

function App() {
  return (
    <div className="App">
      <div className="film-library">
        <FilmListing />
        <FilmDetails />
      </div>
    </div>
  );
}

export default App;
