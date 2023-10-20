const showMenuButton = document.getElementById("show-menu-button");
const menu = document.getElementById("menu");
const closeIcon= document.getElementById("close-icon");

showMenuButton.addEventListener("click", function () {
  menu.style.display="block";
});


closeIcon.addEventListener("click", function (){
  menu.style.display="none";
});