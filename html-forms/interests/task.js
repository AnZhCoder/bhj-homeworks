const card = document.querySelector('.card');

const walkDown = (e) => {
	if (!e.target.classList.contains('interest__check')) {
		return;
	}

	const checkbox = e.target;
	const statusCheckbox = checkbox.checked;
	const interests = checkbox.closest('.interest').querySelector('.interests');

	if (interests) {
		const checkboxes = interests.querySelectorAll('.interest__check')
		checkboxes.forEach(checkbox => checkbox.checked = statusCheckbox);
	}
}

const walkUp = (parent) => {
	if (!parent) {
		return
	}

	const interests = parent.querySelector('.interests');
	const parentInput = parent.querySelector('.interest__check');
	const checkboxes = interests.querySelectorAll('.interest__check');
	const checkeds = interests.querySelectorAll('.interest__check:checked');

	if (checkeds.length < checkboxes.length) {
		parentInput.indeterminate = true;
	} else if (checkeds.length === checkboxes.length) {
		parentInput.indeterminate = false;
		parentInput.checked = true;
	}

	if (checkeds.length === 0) {
		parentInput.indeterminate = false
		parentInput.checked = false;
	}

	const next = parent.closest('.interests').closest('.interest');

	walkUp(next);
}


card.addEventListener('click', walkDown);
card.addEventListener('click', function (e) {
	if (!e.target.classList.contains('interest__check')) {
		return;
	}

	const currentCheckbox = e.target;
	const parent = currentCheckbox.closest('.interests').closest('.interest');
	walkUp(parent);
})