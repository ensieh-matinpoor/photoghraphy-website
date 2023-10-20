console.log("Hello world!");

const showMenuButton = document.getElementById("show-menu-button");
const menu = document.getElementById("menu");

showMenuButton.addEventListener("click", function () {
  menu.classList.toggle("open");
});


