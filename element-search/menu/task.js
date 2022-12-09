const menuLink = document.querySelectorAll(".menu__link");

menuLink.forEach((element) => {
    if (element.nextElementSibling !== null) {
        element.addEventListener("click", function (event) {
            event.preventDefault();
            closeAllSubMenu();
            element.nextElementSibling.classList.toggle("menu_active");
        });
    }
});

const closeAllSubMenu = () => {
    const subMenu = document.querySelectorAll(".menu_sub");
    subMenu.forEach((el) => el.classList.remove("menu_active"));
};
