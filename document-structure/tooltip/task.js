const showHint = (e) => {
	if (!e.target.classList.contains('has-tooltip')) {
		return
	}

	e.preventDefault();
	const title = e.target.getAttribute('title')
	const { top } = e.target.getBoundingClientRect();

	if (!e.target.nextElementSibling || !e.target.nextElementSibling.classList.contains('tooltip')) {
		e.target.insertAdjacentHTML('afterend',

			` <div class="tooltip tooltip_active" style='left: ${e.target.offsetLeft}px; top: ${top + e.target.offsetHeight}px'>${title}</div>`
		);
	} else {
		e.target.nextElementSibling.classList.toggle('tooltip_active');
	}

	const tooltips = document.querySelectorAll('.tooltip');

	if (tooltips.length !== 0) {
		tooltips.forEach(el => {

			if (el !== e.target.nextElementSibling) {
				el.classList.remove('tooltip_active')
			}
		})
	}
}

document.addEventListener('click', showHint);