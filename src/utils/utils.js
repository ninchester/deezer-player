import React from 'react';
import ReactDOM from 'react-dom';
import Popup from '../components/Popup';

const showPopup = (message) => {
	let popup_container = document.createElement('div');
	popup_container.classList = 'popup-container';
	document.body.appendChild(popup_container);
	ReactDOM.render(<Popup message={message} />, popup_container);
}

export default showPopup