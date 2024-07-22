import "../../styles/Features/Features.css";
import FeaturesImage from "../../Data/FeatureImages";
import { IoIosArrowRoundForward } from "react-icons/io";

const Features = () => {
  return (
    <div className="features pt-[9rem] bg-gray-200 ">
      <h1 className="font-extrabold flex flex-col gap-8 items-center justify-center text-[3rem]">
        <span className="self-start fashion relative look text font-extrabold">
          MORGUL up
        </span>
        <span className="self-end style relative look font-extrabold">
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
              <img
                src={feature.img}
                alt=""
                className="w-[100%] h-[100%] object-cover"
              />
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
    </div>
  );
};

export default Features;
