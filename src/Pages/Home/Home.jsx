
import Banner from "./Banner/Banner";
import BannerStat from "./Banner/BannerStat";
import Category from "./Category/Category";

const Home = () => {
    return (
        <div>
           <div className="mt-10">
           <Banner/> 
           </div>
           <BannerStat/>
           <hr />
            <Category/>
        </div>
    );
};

export default Home;