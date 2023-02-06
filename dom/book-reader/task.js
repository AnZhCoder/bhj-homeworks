const fontSize = document.querySelector('.book__control_font-size');
const textColor = document.querySelector('.book__control_color');
const bgColors = document.querySelector('.book__control_background');
const book = document.querySelector('.book');

fontSize.addEventListener('click', toggleFontSize);
textColor.addEventListener('click', toggleTextColor);
bgColors.addEventListener('click', toggleBgColor);

function toggleFontSize(event) {
	event.preventDefault();
	const currentClassSize = event.target;
	const dataSize = event.target.getAttribute('data-size');

	if (currentClassSize.classList.contains('font-size')) {
		currentClassSize.classList.add('font-size_active')
	}

	fontSize.querySelectorAll('.font-size').forEach(el => {
		if (el !== currentClassSize) {
			el.classList.remove('font-size_active')
		}
	})

	if (dataSize) {
		book.classList.add(`book_fs-${dataSize}`)
	}

	chekedClassListBook();
}

function toggleTextColor(event) {
	event.preventDefault();
	const currentClassColor = event.target;
	const dataColor = event.target.getAttribute('data-text-color')

	if (currentClassColor.classList.contains('color')) {
		currentClassColor.classList.add('color_active')
	}

	textColor.querySelectorAll('.color').forEach(el => {
		if (el !== currentClassColor) {
			el.classList.remove('color_active')
		}
	})
	book.classList.add(`book_color-${dataColor}`)

	chekedClassListBook();
}

function toggleBgColor(event) {
	event.preventDefault();
	const currentBgColor = event.target;
	const dataBgColor = event.target.getAttribute('data-bg-color');

	if (currentBgColor.classList.contains('color')) {
		currentBgColor.classList.add('color_active')
	}

	bgColors.querySelectorAll('.color').forEach(el => {
		if (el !== currentBgColor) {
			el.classList.remove('color_active')
		}
	})
	book.classList.add(`book_bg-${dataBgColor}`)

	chekedClassListBook();
}

function chekedClassListBook() {
	let dataSize = fontSize.querySelector('.font-size_active').getAttribute('data-size');
	let dataTextColor = textColor.querySelector('.color_active').getAttribute('data-text-color');
	let dataBgColor = bgColors.querySelector('.color_active').getAttribute('data-bg-color');

	book.classList.forEach(cls => {
		if (cls !== `book_fs-${dataSize}` &&
			cls !== `book_color-${dataTextColor}` &&
			cls !== `book_bg-${dataBgColor}` &&
			cls !== 'book') {
			book.classList.remove(cls)
		}
	})
}