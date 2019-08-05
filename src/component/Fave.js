import React, { Component } from 'react';

class Fave extends Component {


    constructor(props){
        super(props);
        this.state = {
            isFave: false
        }
    }

    handleClick(e){
        e.stopPropagation()

        this.setState({
            isFave: !this.state.isFave
        })
        console.log("handling Fave click!")
        console.log(this.state.isFave)
    }
   
    render() { 
        const isFave = (this.state.isFave) ? 'remove_from_queue' : 'add_to_queue'
        const message = this.state.isFave ? "remove" : "Add"
        return ( 
            <div  onClick={(e) => this.handleClick(e)} className={`film-row-fave ${isFave}`}  >
                <p className="material-icons">{message}</p>
            </div>
         );
    }
}
 
export default Fave;