import { useQuery } from "react-query";
// constants
import { DUMMY_API_URL } from "../../components/constant/config";
import { getParams } from "../../utils/params";

export interface IProductResponse {
  limit: number;
  skip: number;
  total: number;
  products: IProduct[];
}

export interface IProduct {
  id: number;
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

const useProduct = () => {
  let url = `${DUMMY_API_URL}/products?limit=100`;
  const params = getParams();

  return useQuery([params.q], async (): Promise<IProductResponse> => {
    const data = await fetch(url);
    return data.json();
  });
};

export default useProduct;
