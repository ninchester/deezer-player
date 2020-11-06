import React, { Component } from 'react';
import Search from './components/Search';
import TracksTable from './components/TracksTable';
import AudioPlayer from './api/audioPlayer';
import WebPlayer from './components/WebPlayer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tracks: [],
      track: {}
    }
  }

	handleSearch = tracks => {
		this.setState({
			tracks: tracks
		});
	}

  handleOnPlay = (track, position) => {
    if(track.uri === this.state.track.uri) {
      AudioPlayer.playPause(true);
    } else {
      this.setState({
        track: track,
        positionForUpdate: position
      }, function () {
        AudioPlayer.playPause(false);
      });
    }
  }

  render() {
    return (
      <div className="main-container">
        <label className="logo-text">Deezer Player</label>
        <Search onSearch={this.handleSearch}/>
        <TracksTable tracks={this.state.tracks} onPlay={this.handleOnPlay}/>
        <WebPlayer track={this.state.track} positionForUpdate={this.state.positionForUpdate}/>
      </div>  
    );
  }
}

export default App