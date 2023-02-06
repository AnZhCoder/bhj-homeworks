const form = document.querySelector('.tasks__control');
const input = document.querySelector('.tasks__input');
const tasksList = document.querySelector('.tasks__list');
let tasks = [];

const insertToHtml = (text, id) => {
	tasksList.insertAdjacentHTML('beforeend', `
		<div class="task">
			<div class="task__title">
				${text}
			</div>
			<a href="#" class="task__remove" id = ${id}>&times;</a>
		</div>
	`)
}

const renderTasks = () => {
	const tasks = JSON.parse(localStorage.getItem('tasks'));

	if (localStorage.getItem('tasks')) {
		tasks.forEach(task => {
			insertToHtml(task.text, task.id)
		})
	}
}

renderTasks();

const saveToLocalStorage = () => {
	localStorage.setItem('tasks', JSON.stringify(tasks))
}

const addTask = (e) => {
	e.preventDefault();
	const inputText = input.value;
	const randomId = tasksList.children.length + 1;

	const task = {
		id: randomId,
		text: inputText
	}

	if (task.text.trim() === '') {
		return;
	}

	insertToHtml(task.text, task.id);
	tasks.push(task);
	saveToLocalStorage();
	input.value = '';
	input.focus();
}

const removeTask = (e) => {
	if (!e.target.classList.contains('task__remove')) {
		return
	};

	const currentTask = e.target;
	currentTask.closest('.task').remove();
	tasks = tasks.filter(task => task.id !== Number(currentTask.id))
	saveToLocalStorage();
}

form.addEventListener('submit', addTask)
tasksList.addEventListener('click', removeTask)



