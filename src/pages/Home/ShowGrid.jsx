import "../../styles/showGrid/ShowGrid.css";
import billie from "../../assets/Images/billie.jpeg";
import justin from "../../assets/Images/justin.jpeg";
import katy from "../../assets/Images/katy.jpeg";
import { IoIosArrowRoundForward } from "react-icons/io";

const ShowGrid = () => {
  return (
    <div className="overflow-hidden w-[100vw] gap-y-12 gap-x-4  px-10 col-span-12 grid md:grid-cols-12  mt-14  md:gap-4 justify-center lg:grid-rows-[600px] md:grid-rows-[400px] mb-10">
      <div className="row-span-2 col-span-6 rounded-xl overflow-hidden">
        <img src={billie} alt="" className="rounded-xl" />
      </div>
      <div className=" col-span col-span-3 ">
        <img src={justin} alt="" className="rounded-xl " />
      </div>
      <div className="col-span-3">
        <img src={katy} alt="" className="rounded-xl " />
      </div>

      <div className="col-start-7 col-end-[-1] flex justify-center items-center md:text-[2rem] lg:text-[3rem] text-[3rem] font-extrabold gap-2 flex-col  mt-12 md:mx-12">
        <span className="md:self-start fashion relative look font-extrabold">
          Top artist{" "}
        </span>
        <span className="md:text-md md:self-end fashion relative look font-extrabold">
          wear MORGUL
        </span>
        <button className="text-[1rem] md:text-[16px] font-normal flex items-center">
          <button className="rounded-md border-2 border-black text-white py-2 px-1 font-bold bg-black w-[8rem]  hover:border-black hover:bg-white hover:text-black hover:transition-all hover:ease-in transition-all ease-in-out ">
            Shop now
          </button>
        </button>
      </div>
    </div>
  );
};

export default ShowGrid;
