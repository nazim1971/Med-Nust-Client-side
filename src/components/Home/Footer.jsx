import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
import { Typewriter } from "react-simple-typewriter";


const Footer = () => {
    return (
        <div>
         <div
      className="bg-[#262626]  mt-44  "
      
    >
      <div className=" ">
        <footer className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-6 p-10 text-white ">
          <aside className="col-span-2 flex flex-col">
            <p className='text-4xl font-bold'>
              
              
              <Typewriter
        words={['Crafty', 'Carve', 'Crafty Carve']}
        loop={true}
        cursor
        cursorStyle='_'
        typeSpeed={100}
        deleteSpeed={50}
        delaySpeed={2000}
      />
            </p>
            <p className="my-2 ">
            Search through over 1 million listings, including sculptures, paintings, installations, and more, available for display. You’ll discover your next masterpiece, in any style you prefer.
            </p>
            <div className=" text-xl flex gap-2 text-green-500 my-2">
              <FaFacebook />
              <FaInstagram />
              <FaLinkedin />
              <FaGithub />
              <FaYoutube />
            </div>
           <div className="space-y-1">
           <h3 className="text-2xl font-bold">Contact Info :</h3>
            <p className="flex items-center gap-2">
              {" "}
              <FaPhoneAlt className="text-green-500" /> (888) 111-2222
            </p>
            <p className="flex items-center gap-2">
              {" "}
              <IoMdMailOpen className="text-green-500" /> support@CraftyCarve.com
            </p>
            <p className="flex items-center gap-2">
              {" "}
              <FaLocationDot className="text-green-500" /> 23 Urban Street,
              Cityville, USA
            </p>
           </div>
          </aside>
          <nav className="flex flex-col">
          <h6 className="footer-title text-green-500">About Sculpture</h6>
          <a className="link link-hover">Artistry</a>
          <a className="link link-hover">Craftsmanship</a>
          <a className="link link-hover">Materials</a>
          <a className="link link-hover">Inspiration</a>
          <a className="link link-hover">Techniques</a>
          <a className="link link-hover">History</a>
          <a className="link link-hover">Gallery</a>
          <a className="link link-hover">Events</a>
          <a className="link link-hover">Workshops</a>
          <a className="link link-hover">Publications</a>
          <a className="link link-hover">Community</a>
        </nav>
        <nav className="flex flex-col">
  <h6 className="footer-title text-green-500">SCULPTURE MANAGER</h6>
  <a className="link link-hover">Sculpture Manager</a>
  <a className="link link-hover">Exhibit Your Work</a>
  <a className="link link-hover">Connect with Artists</a>
  <a className="link link-hover">Artwork Listings</a>
  <a className="link link-hover">Commission Sculptures</a>
  <a className="link link-hover">Sculpture Manager</a>
  <a className="link link-hover">Resources</a>
</nav>

<nav className="flex flex-col">
  <h6 className="footer-title text-green-500">SCULPTURE SPOTS</h6>
  <a className="link link-hover">Marble District</a>
  <a className="link link-hover">Bronze Plaza, NYC</a>
  <a className="link link-hover">Granite Grove, MD</a>
  <a className="link link-hover">Clay Corner</a>
  <a className="link link-hover">Woodland Workshop</a>
  <a className="link link-hover">Metallic Mile</a>
  <a className="link link-hover">Artisanal Avenue</a>
  <a className="link link-hover">Sculpture Square</a>
</nav>

          <nav className="flex flex-col ">
            <h6 className="footer-title text-green-500">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>

        <div className="px-10 ">
          <hr className=" opacity-20 " />
          <p className="text-center text-sm text-white py-5">© 2024  <a>
                Crafty
                <span>
                  Carv<a className="text-green-500 font-semibold ">e</a>
                </span>
              </a> Reserved</p>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Footer;