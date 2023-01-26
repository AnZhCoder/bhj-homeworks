const modal = document.querySelectorAll('.modal')
const modalMain = document.querySelector('#modal_main');
const modalSucees = document.querySelector('#modal_success');

modalMain.classList.add('modal_active');

const changeActivWindow = (e) => {
    if (e.target.classList.contains('modal__close_times')) {
        e.target.closest('.modal').classList.remove('modal_active')
    }

    if (e.target.classList.contains('show-success')) {
        modalMain.classList.remove('modal_active');
        modalSucees.classList.add('modal_active')
    }
}

modal.forEach(el => {
    el.addEventListener('click', changeActivWindow)
})