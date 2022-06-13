
const template = document.createElement('template');
template.innerHTML = `
  <style>
    .product {
      width: 300px;
      height: 550px;
      margin: 25px 25px;
      position: relative;
      transition: 0.3s;
    }

    .product:hover {
      cursor: pointer;
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
    }

    .product .pro-img {
      width: 100%;
    }

    .product .like-btn {
      position: absolute;
      width: 30px;
      height: 30px;
      bottom: 110px;
      right: 10px;
      z-index: 8;
      border-radius: 50%;
      padding: 5px;
      background-color: rgba(255, 255, 255, 0.8);
    }

    .product .like-btn-black {
      position: absolute;
      width: 30px;
      height: 30px;
      bottom: 110px;
      right: 10px;
      z-index: 8;
      border-radius: 50%;
      padding: 5px;
      background-color: rgba(255, 255, 255, 0.8);
      display: none;
    }

  </style>

  <div class="product">
    <img class="pro-img">
    <img src="../../../public/images/icons/black-heart.png" class="like-btn-black">
    <img src="../../../public/images/icons/heart-outline.png" class="like-btn">
      <div class="desc">
        <h5></h5>
        <h4></h4>
      </div>
  </div>
`;


class Product extends HTMLElement {
  constructor() {
    super();

    this?.attachShadow({ mode: 'open' });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));

    const img = this.shadowRoot?.querySelector<HTMLImageElement>(".pro-img");
    const desc = this.shadowRoot?.querySelector("h5");
    const price = this.shadowRoot?.querySelector("h4");

    const imgSrc = this.getAttribute('image');
    const descText = this.getAttribute('description');
    const priceText = this.getAttribute('price');
    
    if(img && imgSrc) {
      img.src = imgSrc;
    }

    if(desc && descText) {
      desc.innerText = descText;
    }

    if(price && priceText) {
      price.innerText = priceText;
    }
  }

  connectedCallback() {
    const likeBtns = this.shadowRoot?.querySelectorAll<HTMLImageElement>(".like-btn");
    const likeBtnsBlack = this.shadowRoot?.querySelectorAll<HTMLImageElement>(".like-btn-black");

    for(var i=0; i<likeBtns!.length; i++) { 
      const whiteBtn = likeBtns![i];
      const blackBtn = likeBtnsBlack![i];
      likeBtns![i].addEventListener("mouseover", (likeBtns) => {
          blackBtn.style.display = "block";
          whiteBtn.style.display = "none";
      });
  
      likeBtnsBlack![i].addEventListener("mouseout", () => {
          blackBtn.style.display = "none";
          whiteBtn.style.display = "block";
      });
    }
  }
}

window.customElements.define('app-product', Product);