import React, { Component } from 'react'
import RapidApiWrapper from '../api/rapidApiWrapper'
import showPopup from '../utils/utils';

class Search extends Component {
	handleOnKeyDownInputText = (event) => {
		if(event.key === "Enter") {
			this.handleSearch();
			event.preventDefault();
			return false;
		}
	}

	handleSearch = () => {
		var searchField = document.getElementById('searchField').value;
		var noResultsMessage = "No results found";

		if (!searchField) {
			showPopup(noResultsMessage);
			return;
		}

		RapidApiWrapper.findTracksByTitle(searchField)
		.then(response => {
				if(response.status !== 200) {
					throw new Error();
				} else {
					response.json()
					.then(data => {
						if(data.data.length === 0) {
							showPopup(noResultsMessage);
							return;
						} else {
							this.props.onSearch(data);
						}
					})
				}

			})
		.catch(err => {
			showPopup("Ops! An error occured. Please try again");
		});
	}

	render() {
		return (
			<div className="search-container">
				<input className="search-box" type="text" id="searchField" placeholder="Search Music" onKeyDown={(e) => this.handleOnKeyDownInputText(e)} />
				<button className="search-button" id="search" onClick={this.handleSearch}>Search</button>
			</div>
		)
	}
}

export default Search