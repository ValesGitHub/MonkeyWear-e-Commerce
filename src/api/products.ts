import { CommonResponse, Product, ProductResponse } from "../models/shared/interfaces"
import { AvailableProductCategories } from "../models/shared/enums.js"


const clothingsProducts: Product[] = [
  {
    h2: "Abbigliamento Uomo",
    p: "Dalle t's alle felpe",
    id: "1",
    description: "T-shirt la grande onda di Kanagawa",
    price: 15.99,
    url: "public/images/products/f1.jpg"
  },
  {
    h2: "",
    p: "",
    id: "2",
    description: "T-shirt Van Gogh The Met",
    price: 15.99,
    url: "public/images/products/f2.jpg"
  },
  {
    h2: "",
    p: "",
    id: "3",
    description: "Felpa con cappuccio sfumata",
    price: 29.99,
    url: "public/images/products/f4.jpg"
  },
  {
    h2: "",
    p: "",
    id: "3",
    description: "Felpa basic cerniera e cappuccio",
    price: 39.99,
    url: "public/images/products/f3.jpg"
  }
];

const shoesProducts: Product[] = [
  {
    h2: "Scarpe Uomo",
    p: "Dalle flip's alle sneakers",
    id: "4",
    description: "Ciabatte con fascietta blu",
    price: 10.99,
    url: "public/images/products/s1.jpg"
  },
  {
    h2: "",
    p: "",
    id: "5",
    description: "Ciabatte con fascietta verde",
    price: 10.99,
    url: "public/images/products/s2.jpg"
  },
  {
    h2: "",
    p: "",
    id: "6",
    description: "Sneaker casual blu e nera",
    price: 39.99,
    url: "public/images/products/s3.jpg"
  },
  {
    h2: "",
    p: "",
    id: "6",
    description: "Sneaker casual grigia e gialla",
    price: 39.99,
    url: "public/images/products/s4.jpg"
  }
];

const accessoriesProducts: Product[] = [
  {
    h2: "Accessori Uomo",
    p: "Dalle collane ai cappelli",
    id: "7",
    description: "Collana con ciondolo serpente",
    price: 4.99,
    url: "public/images/products/c1.jpg"
  },
  {
    h2: "",
    p: "",
    id: "8",
    description: "Collezione di 3 collane argento",
    price: 6.99,
    url: "public/images/products/c3.jpg"
  },
  {
    h2: "",
    p: "",
    id: "9",
    description: "Cappello basic con logo",
    price: 12.99,
    url: "public/images/products/c2.jpg"
  },
  {
    h2: "",
    p: "",
    id: "9",
    description: "Cappello con stay chill ricamato",
    price: 12.99,
    url: "public/images/products/c4.jpg"
  }
];

export function getProducts(prodType : string): Promise<ProductResponse> {
  let payloadToReturn : ProductResponse; 
  switch(prodType) {
    case AvailableProductCategories.clothing: {
      payloadToReturn = {
        products: clothingsProducts,
        result: {
          message: "",
          messageTitle: "",
          success: true,
      }};
      break;
    }

    case AvailableProductCategories.shoes: {
      payloadToReturn = {
        products: shoesProducts,
        result: {
          message: "",
          messageTitle: "",
          success: true,
      }};
      break;
    }

    case AvailableProductCategories.accessories: {
      payloadToReturn = {
        products: accessoriesProducts,
        result: {
          message: "",
          messageTitle: "",
          success: true,
      }};
      break;
    }

    default: {
      payloadToReturn = {
        products: [],
        result: {
          message: "Category not valid",
          messageTitle: "Category Error",
          success: false,
        }
      }
    }
  }

  const myPromise = new Promise<ProductResponse>((resolve, reject) => {
    setTimeout(() => {
      resolve(payloadToReturn);
    }, 2000);
  })

  return myPromise;
}