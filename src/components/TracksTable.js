import React,  { Component } from 'react';
import TracksTableBody from './TracksTableBody';



const TracksTableHeader = () => {
	return (
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Duration</th>
            <th></th>
          </tr>
        </thead>
	)
}

class TracksTable extends Component {
	constructor() {
		super();
		this.state = {
			track: {}
		}
	}



	render() {
		const {tracks, onPlay} = this.props;

		var tracksTable = 
			<div className="search-results">
				<table className="tracks-table">
			        <TracksTableHeader />
			        <TracksTableBody tracks={tracks} onPlay={onPlay}/>
		      	</table>
		      </div>;

		return (
			(tracks !== undefined && tracks.length !== 0) ?  tracksTable : ""
		)
	}
}

export default TracksTable
