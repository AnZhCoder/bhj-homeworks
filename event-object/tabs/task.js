const tabs = [...document.querySelectorAll(".tab")];
const tabContent = [...document.querySelectorAll(".tab__content")];

tabs.forEach((el) => {
  el.addEventListener("click", function () {
    let currentTab = el;
    let indexCurrentTab;

    tabs.forEach((item) => {
      item.classList.remove("tab_active");
    });
    tabContent.forEach((el) => {
      el.classList.remove("tab__content_active");
    });

    currentTab.classList.add("tab_active");
    indexCurrentTab = tabs.findIndex((i) => i.className === "tab tab_active");
    tabContent[indexCurrentTab].classList.add("tab__content_active");
  });
});
