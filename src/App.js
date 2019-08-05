import React from 'react';
import './App.css';
import FilmListing from './component/FilmListing'
import FilmDetails from './component/FilmDetails'
import TMDB from './TMDB'
function App() {

  
  return (
    <div className="film-library">
      
      <FilmListing films={TMDB} /> 
      

      
      <FilmDetails films={TMDB} /> 
      
    </div>
  
  );
}

export default App;
