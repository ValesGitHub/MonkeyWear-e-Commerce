import { getCookie } from "./cookiescript.js";

if(document.cookie) {
    if(getCookie("gender") == 'M') {
        location.href = "manpage.html";
    }
    else {
        location.href = "womanpage.html";
    }
}

document.body.onload = () => {
    let womanBtn = document.querySelector<HTMLDivElement>(".woman-select");
    let manBtn = document.querySelector<HTMLDivElement>(".man-select");

    if(womanBtn && manBtn) {
      womanBtn.addEventListener("click", () => {
        location.href = "womanpage.html";
      });
      
      manBtn.addEventListener("click", () => {
          location.href = "manpage.html";
      });
    }
}


