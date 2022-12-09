const modalMain = document.getElementById('modal_main');
const modalSucees = document.getElementById('modal_success');
const modalClose = document.getElementsByClassName('modal__close');
const modalContent = document.getElementsByClassName('btn_danger')

modalMain.classList.add('modal_active');

modalContent[0].addEventListener('click', function() {
    modalMain.classList.remove('modal_active');
    modalSucees.classList.add('modal_active')
});

modalClose[0].addEventListener('click', function() {
    modalMain.classList.remove('modal_active');
    modalSucees.classList.remove('modal_active');
});

modalClose[2].addEventListener('click', function() {
    modalSucees.classList.remove('modal_active');
});