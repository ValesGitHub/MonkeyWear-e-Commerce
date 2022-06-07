import { getCookie } from "./scripts/cookiescript.js";

if(document.cookie) {
    if(getCookie("gender") == 'M') {
        location.href = "manpage.html";
    }
    else {
        location.href = "womanpage.html";
    }
}

document.body.onload = () => {
    let womanBtn = document.querySelector(".woman-select");
    let manBtn = document.querySelector(".man-select");


    womanBtn.addEventListener("click", () => {
        location.href = "womanpage.html";
    });
    
    manBtn.addEventListener("click", () => {
        location.href = "manpage.html";
    });
}


