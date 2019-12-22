export interface Product {

  brandName: string;
  constructor(
    productId: number,
    productType: string,
    productName: string,
    productImage: string,
    productDescription: string)
}