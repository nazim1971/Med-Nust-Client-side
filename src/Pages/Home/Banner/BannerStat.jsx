import { BsStripe } from "react-icons/bs";
import { FaCarSide } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";


const BannerStat = () => {
    return (
        <div className="grid grid-cols-3 gap-2 md:gap-4 my-10">
            
           <div className="flex flex-col gap-1 items-center">
           <div className="flex gap-3 items-center">
                <FaCarSide className="text-orange-400 md:text-2xl" />
                <p className=" text-sm md:text-base lg:text-xl font-semibold">Free Shipping</p>
            </div>
            <p className="text-[#898989]  text-xs md:text-sm lg:text-base "> Order Over $600 </p>
           </div>

           <div className="flex flex-col gap-1 items-center">
           <div className="flex gap-3  items-center">
                <BsStripe className="text-orange-400 text-2xl" />
                <p className="text-sm md:text-base lg:text-xl font-semibold">Quick Payment</p>
            </div>
            <p className="text-[#898989] text-xs md:text-sm lg:text-base">100% Secure </p>
           </div>

           <div className="flex  gap-1 flex-col items-center">
           <div className="flex gap-3 items-center">
                <FaPeopleGroup className="text-orange-400 text-2xl" />
                <p className="text-sm md:text-base lg:text-xl font-semibold">24/7 Support</p>
            </div>
            <p className="text-[#898989] text-xs md:text-sm lg:text-base  "> Ready for you </p>
           </div>
        </div>
    );
};

export default BannerStat;