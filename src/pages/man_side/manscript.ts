import { setCookie } from "../../scripts/cookiescript.js";
import { CommonResponse, Product, ProductResponse } from "../../models/shared/interfaces"
import { getProducts } from "../../api/products.js";
import { AvailableProductCategories } from "../../models/shared/enums.js";


const menuLinkContainer = document.querySelector<HTMLDivElement>('.menu-link-container');
const pageContentContainer = document.querySelector<HTMLDivElement>('.page-content');
const pageHeader = document.querySelector<HTMLDivElement>(".header");
const pageNavbar = document.querySelector<HTMLDivElement>(".navbar");

setCookie("F", "M");

function addSpinner() {
  if(pageContentContainer) {
    pageContentContainer.innerHTML = '';
    if(pageHeader && pageNavbar) {
      pageHeader.style.opacity = "0.5";
      pageNavbar.style.opacity = "0.5";
    }
  }
  const divSpinner = document.createElement('div');
  divSpinner.setAttribute('class', 'loading');
  pageContentContainer?.appendChild(divSpinner);
}

function addNewProducts(products: Product[]) {
  if(pageContentContainer) {
    pageContentContainer.innerHTML = `
    <div class="product-container"> 
      <h2 class="header-product"></h2>
      <p class="paragraph-product"></p>
      <div class="products-wrapper">
      </div>
    </div>
    `;
    const headerProduct = document.querySelector<HTMLHeadElement>(".header-product");
    const paragraphProduct = document.querySelector<HTMLParagraphElement>(".paragraph-product");
    const productsWrapper = document.querySelector<HTMLDivElement>(".products-wrapper");

    if(headerProduct && paragraphProduct) {
      headerProduct.innerHTML = products[0].h2;
      paragraphProduct.innerHTML = products[0].p;
    } 
    

    products.forEach(product => {
      if(productsWrapper) {
        productsWrapper.innerHTML += `
          <app-product image="${product.url}" description="${product.description}" price="${product.price} €"></app-product>
        `;
      }
    });
  }

}

function addMessage(message: string) {

}

if(menuLinkContainer){
  const arrayToLoop = Object.values(AvailableProductCategories);
  for(let i=0; i<arrayToLoop.length; i++ ) {
    const value = arrayToLoop[i];
    let categoryElem = document.createElement('a');
    categoryElem.setAttribute("class", `menu-link menu-link-${value}`);
    categoryElem.innerHTML = `
      <div>${value}</div>
    `;

    let div1 = `
    <a href="#" class="menu-link menu-link-${value}"><div>${value}</div></a>
    `;
    menuLinkContainer.appendChild(categoryElem);
    
    const categoryButton = document.querySelector(`.menu-link-${value}`);
     
    if(categoryButton){
      categoryButton.addEventListener("click", () => onCategoryClick(value));
    }
  }
}

async function onCategoryClick(category: string) {
  try {
    if(menuLinkContainer) {
      menuLinkContainer.style.pointerEvents = "none";
    }
    addSpinner();

    const {products, result} = await getProducts(category);

    if(result.success) {
      addNewProducts(products);

      if(menuLinkContainer) {
        menuLinkContainer.style.pointerEvents = "all";
      }

    }
    else {
      addMessage("No category");
    }
  }catch(e) {
    addMessage("Non siamo stati in grado di caricare i dati");
  }

  if(pageHeader && pageNavbar) {
    pageHeader.style.opacity = "1";
    pageNavbar.style.opacity = "1";
  }
}
