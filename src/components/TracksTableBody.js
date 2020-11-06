import React, { Component } from 'react';

class TracksTableBody extends Component {

	handlePlay = (event, index, track) => {
		[...document.querySelectorAll(".pause-button")].forEach((button) => {
			if (button !== event.target) {
				button.classList = "far fa-play-circle play-button";
			}
		})
		var uri = encodeURI(track.preview); 

		const currentTrack = {
			uri: uri,
			title: track.title,
			username: track.artist.name
		}
		this.props.onPlay(currentTrack, index);

		if (event.target.classList.contains('play-button')) {
			event.target.classList = "fas fa-pause-circle pause-button";
		} else {
			event.target.classList = "far fa-play-circle play-button";
		}		
	}

	convertDuration(seconds) {
		return new Date(seconds * 1000).toISOString().substr(11, 8)
	}

	render() {
		const {tracks} = this.props;
		const rows = tracks.data.map((row, id) => {
			const playButtonId = 'playButton_' + id + '_' + row.artist.id;

			return (
				<tr key={id}>
					<td>{row.title}</td>
					<td>{row.artist.name}</td>
					<td>{this.convertDuration(row.duration)}</td>
					<td>
						<i id={playButtonId} className="far fa-play-circle play-button" onClick={(e) => this.handlePlay(e, playButtonId, row)}></i>
					</td>
				</tr>
				)
			})
		return (
			<tbody>{rows}</tbody>
		);
	}
}

export default TracksTableBody;