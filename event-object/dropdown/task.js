const dropDownValue = document.querySelector('.dropdown__value');
const dropDownList = document.querySelectorAll('.dropdown__list');
const dropDownItem = document.querySelectorAll('.dropdown__item');

const switchMenu = () => {
    dropDownList.forEach(item => {
        item.classList.toggle('dropdown__list_active');
    })
}

dropDownValue.addEventListener('click', switchMenu);

dropDownItem.forEach(el => {
    el.addEventListener('click', function (event) {
        event.preventDefault();
        dropDownValue.textContent = el.textContent;
    })
})


