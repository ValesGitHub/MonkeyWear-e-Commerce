import { setCookie } from "../../scripts/cookiescript.js";

interface CommonResponse {
  result: {
    success: boolean;
    message: string;
    messageTitle: string;
  }
}

interface Product {
  id: string;
  url: string;
  description: string;
  price: number;
}

interface ProductResponse extends CommonResponse{
  products: Product[];
}

setCookie("F", "M");

function getProducts(prodType : string): Promise<ProductResponse> {
  let payloadToReturn : ProductResponse; 
  switch(prodType) {
    case "clothing": {
      payloadToReturn = {
        products: [],
        result: {
          message: "",
          messageTitle: "",
          success: true,
      }};
      break;
    }

    case "shoes": {
      payloadToReturn = {
        products: [],
        result: {
          message: "",
          messageTitle: "",
          success: true,
      }};
      break;
    }

    case "accessories": {
      payloadToReturn = {
        products: [],
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