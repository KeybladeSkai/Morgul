import { LuFacebook } from "react-icons/lu";
import "../../styles/Footer/Footer.css"
import { LuInstagram } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoReddit } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="col-span-12  bg-black text-white md:p-6 lg:p-12">
      <div className="bg-black p-2 pt-10 pb-10 grid 
      sm:items-center sm:justify-center
      footer text-sm">
        <div className="flex flex-col gap-3 text-sm">
          <h1 className="text-2xl font-bold  flex flex-col">MORGUL</h1>
          <div className="flex flex-col gap-3">
            <div className="text-sm flex flex-col text-gray-400 ">
              <span className="text-sm">Style yourself with</span>
              <span className="text-sm">awesome clothes from us</span>
            </div>
            <div className="flex gap-2 text-sm">
              <LuFacebook className="bg-yellow-400 w-10 h-10 px-2 rounded-md text-black" />
              <LuInstagram className="bg-yellow-400 w-10 h-10 px-2 rounded-md text-black" />
              <BsTwitterX className="bg-yellow-400 w-10 h-10 px-2 rounded-md text-black" />
              <IoLogoReddit className="bg-yellow-400 w-10 h-10 px-2 rounded-md text-black" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold ">Company</h2>
          <div className="flex flex-col gap-1 text-gray-400">
            <span>About</span>
            <span>Contact us</span>
            <span>Careers</span>
            <span>support</span>
          </div>
        </div>

        <div className="flex flex-col gap-4 ">
          <h2 className="text-2xl font-bold">Need Help</h2>
          <div className="flex flex-col gap-1 text-gray-400">
            <span>FAQs</span>
            <span>Shipping & returns</span>
            <span>Order Tracking</span>
            <span>Send A Message</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Contact</h2>
          <div className="flex flex-col gap-1 text-gray-400">
            <span>we're available from</span>
            <span>10am -6pm GMT, Mon- Fri</span>
            <span>+234 944 440 4402</span>
            <span>shop@Morgul.com</span>
          </div>
        </div>
      </div>
      <div className="flex gap-2 flex-col sm:justify-around sm:flex-row md:justify-around p-2 md:items-center text-sm">
        <h3 className="flex gap-2 text-sm items-center ">
          <div className="flex items-center justify-center">
            <span className="text-sm">©</span>
            <span className="text-sm">2024</span>
          </div>
          <span className="text-sm">MORGUL</span>
        </h3>
        <p>All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
