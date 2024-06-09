import { useQuery } from "@tanstack/react-query";
import Title from "../../../components/Title";
import DisSlider from "./DisSlider";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";



const DiscountProducts = () => {


  const axiosPublic= useAxiosPublic();

  const { data: disProducts = [] } = useQuery({
    queryKey: ["disProducts"],
    queryFn: async () => {
      const { data } = await axiosPublic(`/disMedicines`);
      return data;
    },
  });

   // Filter discount products with discount greater than 0
   const discountedProducts = disProducts.filter(product => product.discount > 0);

   

    return (
        <div>
            <Title subTitle={'Take advantage of our limited-time offers and save big on top-quality healthcare products. Shop now and enjoy unbeatable prices on a wide range of items.'} title={'Exclusive Discounts'} />
            <DisSlider discountedProducts={discountedProducts} />
         <h1>
         </h1>
        
        </div>
    );
};

export default DiscountProducts;