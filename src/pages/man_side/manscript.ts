import { setCookie } from "../../scripts/cookiescript.js";
import { CommonResponse, Product, ProductResponse } from "../../models/shared/interfaces"
import { getProducts } from "../../api/products.js";
import { AvailableProductCategories } from "../../models/shared/enums.js";


const menuLinkContainer = document.querySelector('.menu-link-container');
let categoryType;

setCookie("F", "M");

function addSpinner() {
  console.log("Main Script: SpinnerStarts");
}

function addNewProducts(products: Product[]) {
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
    let div = `
    <a href="#" class="menu-link menu-link-${value}"><div>${value}</div></a>
    `;
    menuLinkContainer.innerHTML += div;
     
    const categoryButton = document.querySelector(`.menu-link-${value}`);
     
    if(categoryButton){
      console.log("ciao")
      categoryButton.addEventListener("click", () => onCategoryClick(value));
    }
  }
}

async function onCategoryClick(category: string) {
  try {
    addSpinner();
    const {products, result} = await getProducts(category);
    if(result.success) {
      addNewProducts(products);
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
