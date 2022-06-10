export interface CommonResponse {
  result: {
    success: boolean;
    message: string;
    messageTitle: string;
  }
}

export interface Product {
  id: string;
  url: string;
  description: string;
  price: number;
}

export interface ProductResponse extends CommonResponse {
  products: Product[];
} 