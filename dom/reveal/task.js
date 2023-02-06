const reveal = document.querySelectorAll('.reveal');

//Вариант № 1

document.addEventListener('scroll', checkVisible);

function checkVisible() {
	reveal.forEach(el => {
		el.classList.remove('reveal_active');
		if (el.getBoundingClientRect().top + el.getBoundingClientRect().height <= document.documentElement.clientHeight) {
			el.classList.add('reveal_active');
		}
	})
}
//Вариант № 2

const elementObserver = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('reveal_active');
			observer.unobserve(entry.target);
		}
	});
}, { threshold: 1.0 });

reveal.forEach(el => elementObserver.observe(el));

