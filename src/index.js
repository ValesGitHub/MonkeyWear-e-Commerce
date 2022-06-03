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


