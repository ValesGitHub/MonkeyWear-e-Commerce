import { setCookie } from "../../scripts/cookiescript.js";
import { CommonResponse, Product, ProductResponse } from "../../models/shared/interfaces"
import { getProducts } from "../../api/products.js";
import { AvailableProductCategories } from "../../models/shared/enums.js";


const menuLinkContainer = document.querySelector<HTMLDivElement>('.menu-link-container');
const pageContentContainer = document.querySelector<HTMLDivElement>('.page-content');

setCookie("F", "M");

function addSpinner() {
  if(pageContentContainer) {
    pageContentContainer.innerHTML = '';
  }

  console.log("Main Script: SpinnerStarts");  
  const divSpinner = document.createElement('div');
  divSpinner.setAttribute('class', 'loading');
  pageContentContainer?.appendChild(divSpinner);
}

function addNewProducts(products: Product[]) {
  if(pageContentContainer) {
    pageContentContainer.innerHTML = '';
    products.forEach(product => {
      pageContentContainer.innerHTML += `
      <app-product image="${product.url}" description="${product.description}" price="${product.price} €"></app-product>
    `;
    });
  }
  console.log(`Main Script: Added Products `, products);
  console.log("Main Script: SpinnerStops");
}

function addMessage(message: string) {
  console.log(`Main Script: ${message}`);
  console.log("Main Script: Spinner Stops");
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
      console.log(result.messageTitle, result.message);
    }
  }catch(e) {
    console.log(e, "failed chiamata");
    addMessage("Non siamo stati in grado di caricare i dati");
  }
}
