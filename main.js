class Paddle {
	constructor(width, height, bottom, left) {
		this.width = width;
		this.height = height;
		this.bottom = bottom;
		this.left = left;
	}
	moveLeft() {}
}

const addPixelSuffix = function(value) {
	return value + 'px';
};

const drawPaddle = function(paddleDiv, paddle) {
	paddleDiv.className = 'paddle';
	paddleDiv.style.width = addPixelSuffix(paddle.width);
	paddleDiv.style.height = addPixelSuffix(paddle.height);
	paddleDiv.style.bottom = addPixelSuffix(paddle.bottom);
	paddleDiv.style.left = addPixelSuffix(paddle.left);
};

const createPaddle = function(document) {
	let paddleDiv = document.createElement('DIV');
	let paddle = new Paddle(150, 25, 10, 405);
	drawPaddle(paddleDiv, paddle);
	let mainScreen = document.getElementById('screen');
	mainScreen.appendChild(paddleDiv);
};

const initialise = function() {
	createPaddle(document);
};
window.onload = initialise;
