let header = document.querySelector(".header");
let barsBtn = document.querySelector(".menu-btn");
let menuNavbar = document.querySelector(".navbar");
let exitBtn = document.querySelector(".exit-btn");
let likeBtn = document.querySelectorAll(".like-btn");
let likeBtnBlack = document.querySelectorAll(".like-btn-black");
let logo = document.querySelector(".logo");

barsBtn.addEventListener("click", () => {
    menuNavbar.style.transition = "0.3s";
    menuNavbar.style.left = "0";
    header.style.opacity = "0.5";
    header.style.pointerEvents = "none";
});

exitBtn.addEventListener("click", () => {
    menuNavbar.style.left = "-300px";
    header.style.opacity = "1";
    header.style.pointerEvents = "all";
});

for(var i=0; i<likeBtn.length; i++) {
    const whiteBtn = likeBtn[i];
    const blackBtn = likeBtnBlack[i];
    likeBtn[i].addEventListener("mouseover", (likeBtn) => {
        blackBtn.style.display = "block";
        whiteBtn.style.display = "none";
    });

    likeBtnBlack[i].addEventListener("mouseout", () => {
        blackBtn.style.display = "none";
        whiteBtn.style.display = "block";
    });
}

logo.addEventListener("click", () => {
    location.href = "../../../index.html";
});