import React, { Component } from 'react';

class DeleteButton extends Component {
  	noItemsFound = () => {
    	return this.props.list.length === 0;
  	}

	deleteLastItem = event => {
    	this.props.deleteLastItem();
    }
  
	render() {
    	return(
        	<button onClick={this.deleteLastItem} disabled={this.noItemsFound()}>
          		Delete Last Item
        	</button>
        )
    }
}

export default DeleteButton;