let bars = document.querySelector(".menu-btn");
let menu = document.querySelector(".navbar");
let laix = document.querySelector(".exit-btn");
let head = document.querySelector(".header");
let likeBtn = document.querySelectorAll(".like-btn");
let likeBtnBlack = document.querySelectorAll(".like-btn-black");

bars.addEventListener("click", () => {
    menu.style.transition = "0.3s";
    menu.style.left = "0";
    head.style.opacity = "0.5";
    head.style.pointerEvents = "none";
});

laix.addEventListener("click", () => {
    menu.style.left = "-300px";
    head.style.opacity = "1";
    head.style.pointerEvents = "all";
});

for(var i=0; i<likeBtn.length; i++) {
    console.log(likeBtn[i])
    likeBtn[i].addEventListener("mouseover", () => {
        likeBtnBlack[i].style.display = "block";
        likeBtn.style[i].display = "none";
    });
}


likeBtnBlack.addEventListener("mouseout", () => {
    likeBtnBlack.style.display = "none";
    likeBtn.style.display = "block";
});
