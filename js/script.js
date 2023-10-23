const showMenuButton = document.getElementById("show-menu-button");
const menu = document.getElementById("menu");
const closeIcon= document.getElementById("close-icon");
const main= document.getElementById("main");

showMenuButton.addEventListener("click", function () {
  main.style.filter="blur(5px)"
  menu.style.display="block";
});


closeIcon.addEventListener("click", function (){
  main.style.filter="none";
  menu.style.display="none";
});
