
import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import BannerStat from "./Banner/BannerStat";
import Category from "./Category/Category";
import DiscountProducts from "./Discounts/DiscountProducts";
import Populer from "./Populer/Populer";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import Faq from "./FAQ/Faq";

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
            <Populer/>

            <Faq/>

            {/* before footer */}

            <div className="my-20 ">
        <div className="space-y-7 md:w-[80%] lg:w-[60%] mx-auto text-center">
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold">
            <Typewriter
              words={[
                "Got A Problem?",
                "We Got You!",
                "Got A Problem? We Got You!",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h1>
          <p>
            “We rise by lifting others” is what we believe in. You won’t stay
            stuck in the process; that’s our promise. All the support tickets
            are taken care of with high priority. You will hear back from us
            within 12 hours of receiving your mail.
          </p>

          <div className="flex gap-8 justify-center">
            <Link to='https://www.linkedin.com/in/nazim1971/' target="blank" className="btn bg-orange-400 text-white border-none">
              Contact Us
            </Link>
            <Link to='/howItWorks' className="btn bg-white text-orange-400 border-orange-400">
              User Guide
            </Link>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Home;