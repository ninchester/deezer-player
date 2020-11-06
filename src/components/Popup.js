import React, { Component } from 'react';

class Popup extends Component {
	render() {
		const {message} = this.props;
		setTimeout(() => {
			document.querySelector('.popup-container').remove();
		}, 4000);
		return(
			<label className="search-no-results">{message}</label>
		);
	}
}

export default Popup