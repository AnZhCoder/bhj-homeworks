const dropDownValue = document.querySelector('.dropdown__value');
const dropDownList = document.querySelector('.dropdown__list');
const dropDownItem = document.querySelectorAll('.dropdown__item');

const switchMenu = (e) => {
    if (e.target.classList.contains('dropdown__value')) {
        e.target.nextElementSibling.classList.toggle('dropdown__list_active');
    }
}

const switchValue = (e) => {
    if (!e.target.classList.contains('dropdown__link')) {
        return;
    }

    e.preventDefault();
    e.target.closest('.dropdown').querySelector('.dropdown__value').textContent = e.target.textContent;
    e.target.closest('.dropdown').querySelector('.dropdown__list').classList.remove('dropdown__list_active');
}

dropDownValue.addEventListener('click', switchMenu);
dropDownList.addEventListener('click', switchValue);