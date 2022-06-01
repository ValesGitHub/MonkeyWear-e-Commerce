function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

if(!document.cookie || getCookie("gender") == "M") {
    document.cookie = "gender=F; expires=; path=/";
}
let bars = document.querySelector(".menu-btn");
let menu = document.querySelector(".navbar");
let laix = document.querySelector(".exit-btn");
let head = document.querySelector(".header");

bars.addEventListener("click", () => {
    menu.style.transition = "0.3s";
    menu.style.left = "0";
    head.style.opacity = "0.5";
    head.style.pointerEvents = "none";
})

laix.addEventListener("click", () => {
    menu.style.left = "-300px";
    head.style.opacity = "1";
    head.style.pointerEvents = "all";
})

