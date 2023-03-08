const menu = document.querySelector(".material-icons");
const mobile_menu = document.querySelector(".mobile-menu")

menu.addEventListener("click", function(){
    menu.innerText = menu.innerText === "menu"
    ? "close"
    : "menu";

    mobile_menu.classList.toggle("show")
});


