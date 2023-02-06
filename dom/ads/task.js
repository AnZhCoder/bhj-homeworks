const rotatorsCase = Array.from(document.querySelectorAll('.rotator__case'));

function getIndex() {
	return rotatorsCase.findIndex(el => el.classList.contains('rotator__case_active'))
}

function getDelay() {
	return Number(rotatorsCase[getIndex()].getAttribute('data-speed'));
}

function getColor() {
	return rotatorsCase[getIndex()].getAttribute('data-color');
}

function switchCase() {
	let index = getIndex();
	let color = getColor();
	rotatorsCase[index].style.color = color;
	rotatorsCase[index].classList.remove('rotator__case_active');

	index + 1 >= rotatorsCase.length ? 
	rotatorsCase[0].classList.add('rotator__case_active') : 
	rotatorsCase[index + 1].classList.add('rotator__case_active');
}

setInterval(switchCase, getDelay())