'use strict';
const images = [
	{'id': '1', 'url': './img_cave.jpg'},
	{'id': '2', 'url':'./img_darkestpink.jpg'},
	{'id': '3', 'url':'./img_death.jpg'},
	{'id': '4', 'url':'./img_hatechan.jpg'},
	{'id': '5', 'url':'./img_moonride.jpg'},
	{'id': '6', 'url':'./img_synthfall.jpg'},
	{'id': '7', 'url':'./img_village.jpg'},
]

const ctn = document.querySelector('#ctn-item');
const loadImages = (images, container) => {
	images.forEach (image => {
		container.innerHTML += `
			<div class='item'>
				<img src='${image.url}'>
			</div>
		`})}

loadImages(images, ctn);
let items = document.querySelectorAll('.item');

const prev = () => {
	ctn.appendChild(items[0]);
	items = document.querySelectorAll('.item');
}

const next = () => {
	const lastItem = items[items.length - 1];
	ctn.insertBefore( lastItem, items[0]);
	items = document.querySelectorAll('.item');
}

document.querySelector('#back').addEventListener('click', prev);
document.querySelector('#next').addEventListener('click', next);