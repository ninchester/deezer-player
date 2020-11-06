import React, { Component } from 'react';
import AudioPlayer from '../api/audioPlayer';

class WebPlayer extends Component {

	handleOnPlayPauseClick = (event) => {
		AudioPlayer.playPause(event.target, this.props.playPauseSameTrack);
		const playButtonId = this.props.positionForUpdate;
		const selector = '#' + playButtonId;
		const playButton = document.querySelector(selector);
		if (playButton) {
			if (playButton.classList.contains('play-button')) {
				playButton.classList = "fas fa-pause-circle pause-button";
			} else {
				playButton.classList = "far fa-play-circle play-button";
			}	
		}
	}

	render() {
		const {track} = this.props;
		if (track && Object.keys(track).length !== 0) {
			const trackInfo = track.title + ' by ' + track.username;
			return(		
				<div className="web-player">
					<audio id="audioPlayer" className="audio-player" src={track.uri} type="audio/mpeg" crossOrigin="anonymous" ></audio>
					<button id="playButton" data-playing="false" role="switch" aria-checked="false" onClick={(e) => this.handleOnPlayPauseClick(e)}></button>
					<label id="trackInfo">{trackInfo}</label>
				</div>
			)
		} else {
			return "";
		}
	}
}
export default WebPlayer;
