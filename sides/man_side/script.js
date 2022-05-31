let bars = document.getElementById("menu-btn");
let menu = document.getElementById("navbar");
let laix = document.getElementById("exit-btn");
let head = document.getElementById("header");

bars.onclick = () => {
    menu.style.transition = "0.3s";
    menu.style.left = "0";
    head.style.opacity = "0.5";
    head.style.pointerEvents = "none";
}

laix.onclick = () => {
    menu.style.left = "-300px";
    head.style.opacity = "1";
    head.style.pointerEvents = "all";
}