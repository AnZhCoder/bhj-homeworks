const menuSubs = document.querySelectorAll('.menu_sub');
const menu = document.querySelector('.menu');

const switchMenu = (e) => {
  if (!e.target.classList.contains('menu__link')) {
    return;
  }

  const currentLink = e.target;
  let subMenu = currentLink.closest('.menu__item').querySelector('.menu_sub');

  if (subMenu) {
    e.preventDefault();
    subMenu.classList.toggle('menu_active');
  }

  menuSubs.forEach((item) => {
    if (item !== subMenu) {
      item.classList.remove('menu_active');
    }
  });
}

menu.addEventListener('click', switchMenu)