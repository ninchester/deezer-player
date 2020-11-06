
var audioContext = null;

class AudioPlayer {

  initAudioContext() {
	const audioElement = document.querySelector('audio');
    
    if (audioElement) {
      if (audioContext === null) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioContext = new AudioContext();
        const track  = audioContext.createMediaElementSource(audioElement);
        track.crossOrigin = "anonymous";
        track.connect(audioContext.destination);
      } 
    } 

    return audioContext;
  }

  playPause(playPauseSameTrack) {
  	const playControl = document.querySelector('#playButton');
  	const audioElement = document.querySelector('audio');

    if (audioElement && playControl) {
		if (!playPauseSameTrack) {
			playControl.dataset.playing = false;
		}

		if (!audioContext) {
			audioContext = this.initAudioContext();
		}

		if (audioContext.state === 'suspended') {
		    audioContext.resume();
		}

		if (playControl.dataset.playing === 'false') {
		    audioElement.play().then(_ => {
		        playControl.dataset.playing = 'true';
		    });
		} else if (playControl.dataset.playing === 'true') {
		    audioElement.pause()
		    playControl.dataset.playing = 'false';
		}
    }
  }
}

export default new AudioPlayer();
