import React, {Component} from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

class FilmRow extends Component {


    
    
    render() { 

        const year = new Date(this.props.film.release_date);
        return ( 
           
            <div onClick={() => this.props.handleDetailsClick(this.props.film)} className="film-row">
                <FilmPoster poster={this.props.film.poster_path} />
                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{year.getFullYear()}</p>
                </div>
                <div>
                    <Fave onFaveToggle={this.props.onFaveToggle} isFave={this.props.isFave}/>
                </div>
            </div>
        
         );
    }
}
 
export default FilmRow;