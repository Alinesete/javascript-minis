const turn_on = document.getElementById ('turn_on');
const turn_off = document.getElementById ('turn_off');
const try_again = document.getElementById ('try_again');
const lightbulb = document.getElementById ('lightbulb');

function turnOn () {
	if (!isBulbBroken()){
		lightbulb.src = './lightbulb_on.png';
	}
}

function turnOff () {
	if (!isBulbBroken()){
		lightbulb.src = './lightbulb_off.png';
	}
}

function breakBulb () {
		lightbulb.src = './lightbulb_broken.png';
		try_again.style.opacity= '100%';
}

function isBulbBroken () {
	return lightbulb.src.indexOf ("broken") > -1;
}

function tryAgain () {
	window.location.reload();
}

turn_on.addEventListener ('click', turnOn);
turn_off.addEventListener ('click', turnOff);
try_again.addEventListener ('click', tryAgain);
lightbulb.addEventListener ('mouseover', turnOn);
lightbulb.addEventListener ('mouseleave', turnOff);
lightbulb.addEventListener ('dblclick', breakBulb);