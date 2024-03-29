const chatWidget = document.querySelector('.chat-widget');
const input = document.querySelector('#chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');

chatWidget.addEventListener('click', () => {
	chatWidget.classList.add('chat-widget_active');
})

input.addEventListener('keydown', submitMessages)

function submitMessages(event) {
	const data = new Date();
	const hh = data.getHours().toString().padStart(2, 0);
	const mm = data.getMinutes().toString().padStart(2, 0);

	if (event.code === 'Enter' && (input.value).trim() !== '') {
		messages.innerHTML += `
		<div class="message message_client">
            <div class="message__time">${hh} : ${mm}</div>
             <div class="message__text">${input.value}</div>
         </div>
		`;
		input.value = '';
		messages.lastElementChild.scrollIntoView();
		renderAutoMessage(hh, mm);

		if (chatWidget.classList.contains('chat-widget_active')) {
			setTimeout(() => {
				messages.innerHTML += `
				<div class="message">
					<div class="message__time">${hh} : ${mm}</div>
					<div class="message__text">Вы еще не ушли?</div>
				</div>
				`
			}, 30000);
		}
	}
}

function renderAutoMessage(hh, mm) {
	const words = [
		'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
		'У нас все хорошо. У вас видимо не очень',
		'Где Ваша совесть?',
		'Мы ничего не продаем',
		'К сожалению все операторы сейчас заняты!',
		'Кто тут?',
		'Добрый день. До свидания!',
		'Не пишите нам больше!',
		'Вы время видели????',
		'Рабочий день закончен. Напишите завтра(нет)'
	]

	const word = words[Math.floor(Math.random() * words.length)];

	messages.innerHTML += `
		<div class="message">
            <div class="message__time">${hh} : ${mm}</div>
             <div class="message__text">${word}</div>
         </div>
		`;
	messages.lastElementChild.scrollIntoView();
}