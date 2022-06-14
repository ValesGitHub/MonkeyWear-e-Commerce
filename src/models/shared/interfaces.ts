export interface CommonResponse {
  result: {
    success: boolean;
    message: string;
    messageTitle: string;
  }
}

export interface Product {
  h2: string;
  p: string;
  id: string;
  url: string;
  description: string;
  price: number;
}

export interface ProductResponse extends CommonResponse {
  products: Product[];
} 