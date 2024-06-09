
import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import BannerStat from "./Banner/BannerStat";
import Category from "./Category/Category";
import DiscountProducts from "./Discounts/DiscountProducts";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
           <div className="mt-10">
           <Banner/> 
           </div>
           <BannerStat/>
           <hr />
            <Category/>
            <DiscountProducts/>
        </div>
    );
};

export default Home;