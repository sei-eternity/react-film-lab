import React, { Component } from 'react';
import './App.css';
import FilmListing from './component/FilmListing';
import FilmDetails from './component/FilmDetails';
import TMDB from './TMDB';
import axios from "axios";


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      films: TMDB.films,
      faves: [],
      current: {}
    }
    this.handleFaveToggle = this.handleFaveToggle.bind(this);
    this.handleDetailsClick = this.handleDetailsClick.bind(this);
  }

  handleFaveToggle(film){

    const faves = [...this.state.faves];
    const filmIndex = faves.indexOf(film)

    if (filmIndex !== -1){
       faves.splice(filmIndex, 1);
       console.log(`Removing ${film.title}`)
    }else{
      faves.push(film);
      console.log(`Adding ${film.title}`)
    }
    this.setState({faves})

    console.log("handleFav Toggle called")
  }

  handleDetailsClick(film){
    
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
    
    axios({
      method: 'GET',
      url: url
    }).then(response => {
      console.log(response.data) 
      this.setState({ current: response.data })
      console.log(`Fetching details for ${this.state.current}`)
    })
    .catch(e => {
      console.log(`eeeeeeeeeee ${e}`)
    });
    
    
}

  render(){
  return (
    <div className="App">
      <div className="film-library">
        <FilmListing handleDetailsClick={this.handleDetailsClick} films={this.state.films} faves={this.state.faves} onFaveToggle={this.handleFaveToggle}/> 
        <FilmDetails film={this.state.current} /> 
      </div>
    </div>
  
  );
}
}

export default App;
