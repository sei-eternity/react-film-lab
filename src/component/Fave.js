import React, { Component } from 'react';

class Fave extends Component {


    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    handleFaveClick = (e) => {
        e.stopPropagation()

        this.props.onFaveToggle()
        console.log("handling Fave click!")
        console.log(this.props.isFave)
    }
   
    render() { 
        const isFave = (this.props.isFave) ? 'remove_from_queue' : 'add_to_queue'
        const message = this.props.isFave ? "remove_from_queue" : "add_to_queue"
        return ( 
            <div  onClick={this.handleFaveClick} className={`film-row-fave ${isFave}`}  >
                <p className="material-icons">{message}</p>
            </div>
         );
    }
}
 
export default Fave;