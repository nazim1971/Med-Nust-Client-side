import { BiCreditCard } from "react-icons/bi";
import { BsStripe } from "react-icons/bs";
import {
  FaCcMastercard,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { FaCcVisa, FaLocationDot } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
import { Typewriter } from "react-simple-typewriter";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <div className="bg-[#262626]  mt-44  ">
        <div className=" ">
          <footer className="grid grid-cols-2 md:my-20 md:grid-cols-3 gap-5 lg:grid-cols-5 p-10 text-white ">
            <aside className="col-span-2 space-y-2 flex flex-col">
              <p className="text-4xl font-bold">
                <Typewriter
                  words={["Med", "Nust", "Med-Nust"]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </p>
              <p className="my-2 ">
                Discover an extensive selection of over 1 million healthcare
                products, including medications, supplements, medical devices,
                and more. Find the right solution for your health needs, in any
                category you require.
              </p>
            </aside>

            <nav className=" flex-col hidden md:flex">
              <h3 className="md:text-xl  mb-3 underline text-orange-400">
                Contact Info{" "}
              </h3>
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="text-orange-400" /> +8801867748073
              </p>
              <p className="flex items-center gap-2">
                <IoMdMailOpen className="text-orange-400" /> support@mednust.com
              </p>
              <p className="flex  gap-2">
                <FaLocationDot className="text-orange-400" /> Mohammadpur,
                Dhaka-1207, Bangladesh.
              </p>
            </nav>

            <nav className="flex flex-col">
              <h6 className="md:text-xl  mb-3 underline text-orange-400">
                Payment
              </h6>
              <div className="flex gap-2 text-2xl md:text-3xl">
                    <FaCcVisa />
                    <BiCreditCard />
                    <FaCcMastercard />
                    <BsStripe />
                  </div>
            </nav>

            <nav >
              <h6 className=" md:text-xl  mb-3 underline text-orange-400">
                Social links
              </h6>
              <div className="flex text-2xl md:text-3xl gap-2">
              <a className="link link-hover" href="https://www.facebook.com/nazim1971/">
                <FaFacebook />
              </a>
              <a className="link link-hover" href="https://www.instagram.com/_nazim1971">
                <FaInstagram  />
              </a>
              <a className="link link-hover" href="https://www.linkedin.com/in/nazim1971/">
                <FaLinkedin  />
              </a>
              <a className="link link-hover" href="https://youtube.com/">
                <FaYoutube  />
              </a>
              </div>
            </nav>
            <nav className="flex flex-col col-span-2 md:hidden">
              <h3 className="md:text-xl  mb-3 underline text-orange-400">
                Contact Info{" "}
              </h3>
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="text-orange-400" /> +8801867748073
              </p>
              <p className="flex items-center gap-2">
                <IoMdMailOpen className="text-orange-400" /> support@mednust.com
              </p>
              <p className="flex  gap-2">
                <FaLocationDot className="text-orange-400" /> Mohammadpur,
                Dhaka-1207, Bangladesh.
              </p>
            </nav>
          </footer>

          <div className="px-10 ">
            <hr className=" opacity-20 " />
            <p className="text-center text-sm text-white py-5">
              © {currentYear}{" "}
              <a>
                Med
                <span className="text-orange-400">-Nust</span>
              </a>{" "}
              Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
