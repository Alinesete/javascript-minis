const semaphore = document.getElementById ("semaphore");
const buttons = document.getElementById ("buttons");
var n = 0;
var intervalId = null;

const trafficLight = (event) => {
	clearInterval(intervalId);
	change[event.target.id]();
}

const turnAuto = () => {
	const colours = ['red','yellow','green'];
	const color = colours[n];
	change[color]();
	n = n < 2 ? ++n : 0;
}

const change = {
	'red':		() => semaphore.src = './semaphore_red.png',
	'yellow': 	() => semaphore.src = './semaphore_yellow.png',
	'green':	() => semaphore.src = './semaphore_green.png',
	'off':		() => semaphore.src = './semaphore_off.png',
	'auto':		() => intervalId = setInterval(turnAuto, 1000)
}

buttons.addEventListener('click', trafficLight);