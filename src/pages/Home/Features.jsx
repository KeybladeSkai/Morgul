import "../../styles/Features/Features.css";
import FeaturesImage from "../../Data/FeatureImages";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div
      className="  col-span-12
  overflow-hidden
  features pt-[4rem]
  bg-gray-200 grid px-4 md:grid-cols-custom-2 lg:grid-cols-custom auto-rows-min border-2 place-items-center 
  gap-20"
    >
      <h1 className="items-self-start font-extrabold flex flex-col md:gap-8 items-center justify-self text-2xl md:text-[3rem]">
        <span className="md:self-start look text font-extrabold">
          MORGUL up
        </span>
        <span className=" relative self-end  look font-extrabold text-4xl">
          with top picks
        </span>
      </h1>
      {FeaturesImage.map((feature, index) => (
        <div key={index}>
          <div
            key={index}
            className="mb-4 w-[100%] h-[100%] flex flex-col gap-2 rounded-4xl "
          >
            <div className="rounded-3xl overflow-hidden cursor-pointer">
              <img src={feature.img} alt="" className="w-[100%] h-[100%] " />
            </div>
          </div>

          <div className="flex items-center justify-between ml-3">
            <div className="flex flex-col justify-center">
              <p className="text-xl font-normal">{feature.desc}</p>
              <p className="text-[12px]">Shop now !</p>
            </div>
            <IoIosArrowRoundForward className="text-3xl cursor-pointer" />
          </div>
        </div>
      ))}
      <h1 className="font-extrabold flex flex-col gap-2 items-center justify-center text-[3rem]">
        <span className="self-start fashion relative look text font-extrabold">
          Explore Now
        </span>

        <button className="text-[1rem] md:text-[16px] font-normal flex items-center">
          <Link to="/newCollection">
            <button className="rounded-md border-2 border-black text-white py-2 px-1 font-bold bg-black w-[8rem]  hover:border-black hover:bg-white hover:text-black hover:transition-all hover:ease-in transition-all ease-in-out ">
              Shop
            </button>
          </Link>
        </button>
      </h1>
    </div>
  );
};

export default Features;
