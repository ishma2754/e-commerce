import { FeaturedProducts, Hero } from "../components/index";
import {customFetch} from '../utils/index'


const url = '/products?featured=true'

export const loader = async() => {
  const response = await customFetch(url);

  const products = response.data.data 
  return {products} //why object
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts/>
    </>
  );
};

export default Landing;
