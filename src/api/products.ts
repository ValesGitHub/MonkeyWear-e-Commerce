import { CommonResponse, Product, ProductResponse } from "../models/shared/interfaces"
import { AvailableProductCategories } from "../models/shared/enums.js"

const clothingsProducts: Product[] = [
  {
  id: "1",
  description: "first",
  price: 10,
  url: "an url"
  },
  {
    id: "2",
    description: "second",
    price: 20,
    url: "an url"
  },
  {
    id: "3",
    description: "third",
    price: 30,
    url: "an url"
  },
];

const shoesProducts: Product[] = [
  {
  id: "6",
  description: "first",
  price: 10,
  url: "an url"
  },
  {
    id: "2",
    description: "second",
    price: 20,
    url: "an url"
  },
  {
    id: "3",
    description: "third",
    price: 30,
    url: "an url"
  },
];

const accessoriesProducts: Product[] = [
  {
  id: "8",
  description: "first",
  price: 10,
  url: "an url"
  },
  {
    id: "2",
    description: "second",
    price: 20,
    url: "an url"
  },
  {
    id: "3",
    description: "third",
    price: 30,
    url: "an url"
  },
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