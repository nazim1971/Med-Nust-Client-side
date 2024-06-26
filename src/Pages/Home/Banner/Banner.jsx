import { Typewriter } from "react-simple-typewriter";
import Slider from "./Slider";
import { Link } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";

const Banner = () => {
    return (
        <div>
            <div className= " flex flex-col-reverse md:flex-row  gap-10 md:5">
                <div className="flex  flex-col justify-center  gap-5 md:w-2/4">
                <p className='text-xl font-bold text-center md:text-left '>
              
              
              <Typewriter
        words={['Med', 'Nust', 'Med-Nust']}
        loop={true}
        cursor
        cursorStyle='_'
        typeSpeed={100}
        deleteSpeed={50}
        delaySpeed={2000}
      />
            </p>
                    <h1 className="lg:text-5xl md:text-4xl text-2xl text-orange-400 font-medium">Your Trusted Pharmacy Store</h1>
                    <p>Discover top-quality medicines and healthcare products at unbeatable prices. Your health, our priority every day.
                    </p>
                    <Link to='/howItWorks' className="flex gap-2 btn  btn-ghost items-center">
              {" "}
              <FaPlayCircle className="text-xl text-orange-400" />
              
              <Typewriter
              words={['how it works?']}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
              />
            </Link>
                </div>
                <div className="md:w-2/4">
                    <Slider/>
                </div>
            </div>
        </div>
    );
};

export default Banner;