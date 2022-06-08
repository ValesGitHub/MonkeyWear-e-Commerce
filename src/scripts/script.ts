const header = document.querySelector<HTMLDivElement>(".header");
const barsBtn = document.querySelector<HTMLImageElement>(".menu-btn");
const menuNavbar = document.querySelector<HTMLDivElement>(".navbar");
const exitBtn = document.querySelector<HTMLImageElement>(".exit-btn");
const likeBtns = document.querySelectorAll<HTMLImageElement>(".like-btn");
const likeBtnsBlack = document.querySelectorAll<HTMLImageElement>(".like-btn-black");
const logo = document.querySelector<HTMLDivElement>(".logo");

barsBtn?.addEventListener("click", () => {
  if(menuNavbar && header) {
    menuNavbar.style.transition = "0.3s";
    menuNavbar.style.left = "0";
    header.style.opacity = "0.5";
    header.style.pointerEvents = "none";
  }
});

exitBtn?.addEventListener("click", () => {
  if(menuNavbar && header) {
    menuNavbar.style.left = "-300px";
    header.style.opacity = "1";
    header.style.pointerEvents = "all";
  }
});

for(var i=0; i<likeBtns.length; i++) {
    const whiteBtn = likeBtns[i];
    const blackBtn = likeBtnsBlack[i];
    likeBtns[i].addEventListener("mouseover", (likeBtns) => {
        blackBtn.style.display = "block";
        whiteBtn.style.display = "none";
    });

    likeBtnsBlack[i].addEventListener("mouseout", () => {
        blackBtn.style.display = "none";
        whiteBtn.style.display = "block";
    });
}

logo?.addEventListener("click", () => {
    location.href = "../../../index.html";
});