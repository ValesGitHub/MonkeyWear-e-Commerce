"use strict";
const header = document.querySelector(".header");
const barsBtn = document.querySelector(".menu-btn");
const menuNavbar = document.querySelector(".navbar");
const exitBtn = document.querySelector(".exit-btn");
const likeBtn = document.querySelectorAll(".like-btn");
const likeBtnBlack = document.querySelectorAll(".like-btn-black");
const logo = document.querySelector(".logo");

barsBtn === null || barsBtn === void 0 ? void 0 : barsBtn.addEventListener("click", () => {
    if (menuNavbar && header) {
        menuNavbar.style.transition = "0.3s";
        menuNavbar.style.left = "0";
        header.style.opacity = "0.5";
        header.style.pointerEvents = "none";
    }
});

exitBtn === null || exitBtn === void 0 ? void 0 : exitBtn.addEventListener("click", () => {
    if (menuNavbar && header) {
        menuNavbar.style.left = "-300px";
        header.style.opacity = "1";
        header.style.pointerEvents = "all";
    }
});

for (var i = 0; i < likeBtn.length; i++) {
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

logo === null || logo === void 0 ? void 0 : logo.addEventListener("click", () => {
    location.href = "../../../index.html";
});
