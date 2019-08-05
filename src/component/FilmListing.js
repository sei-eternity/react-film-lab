import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {

    constructor(props){
        super(props)
        this.state = {
            filters: "all"
        }
    }

    
    handleFilterClick(filter){

        this.setState({
            filters: filter
        })

        console.log(`Setting filter to ${filter}`)
        
    }

    render(){
        const allFilms = this.props.films
        const filmsTitle = allFilms.films.map((film) => <FilmRow key={film.id} film={film} />)
        const isActiv = this.state.filters === "all" && "is-active"
        return(
            <div className="film-list">
             <h1 className="section-title">FILMS</h1>
               <div className="film-list-filters">
                  <div onClick={() => this.handleFilterClick('all')} className={`film-list-filter ${this.state.filters === 'all' ? 'is-active' : ''}`}>
                  ALL
                  
                    <span className="section-count">{allFilms.films.length}</span>
                  </div>
                  <div onClick={() => this.handleFilterClick('faves')} className={`film-list-filter ${this.state.filters === 'faves' ? 'is-active' : ''}`}>
                     FAVES
                      <span className="section-count">0</span>
                  </div>
             </div>
                    {filmsTitle}
            {console.log(allFilms.films)}
            </div>
        );
    }
}


export default FilmListing;



