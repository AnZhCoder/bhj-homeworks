const showHint = (e) => {
	if (!e.target.classList.contains('has-tooltip')) {
		return
	}
	e.preventDefault();
	const title = e.target.getAttribute('title')
	const { left, top } = e.target.getBoundingClientRect();
	e.target.insertAdjacentHTML('afterend',

		` <div class="tooltip" style='left: ${left + 10}px; top: ${top + 20}px'>${title}</div>`
	)
	e.target.nextElementSibling.classList.toggle('tooltip_active');
	console.log(left, top);
}


document.addEventListener('click', showHint);



