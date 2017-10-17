// index.js
import _ from "lodash";
import './style.css';

function component () {
	var element = document.createElement('div');

	// Lodash, now improted by this script
    element.innerHTML = _.join(['Hello', 'webpack！'], ' ');
    element.classList.add('hello');

	return element;
}

document.body.appendChild(component());