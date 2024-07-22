import "../../styles/showGrid/ShowGrid.css";
import billie from "../../assets/Images/billie.jpeg";
import justin from "../../assets/Images/justin.jpeg";
import katy from "../../assets/Images/katy.jpeg";
import { IoIosArrowRoundForward } from "react-icons/io";

const ShowGrid = () => {
  return (
    <div className=" mt-14 showGrid mb-20 gap-2 justify-center">
      <div className="border-2 border-black image-grid-col-2 image-grid-row-2 ">
        <img src={billie} alt="" className="" />
      </div>
      <div className="border-2 border-black">
        <img src={justin} alt="" className="" />
      </div>
      <div className="border-2 border-black ">
        <img src={katy} alt="" className="" />
      </div>
      <div className=" image-grid-col-2 flex justify-center items-center text-[4rem] font-extrabold gap-2 flex-col mx-12">
        <span className="self-start fashion relative look font-extrabold">Top artist </span>
        <span className="self-end fashion relative look font-extrabold">
            wear MORGUL
        </span>
        <button className="text-[16px] font-normal flex items-center">
        <button className="rounded-md border-2 border-black text-white py-2 px-1 font-bold bg-black w-[8rem]  hover:border-black hover:bg-white hover:text-black hover:transition-all hover:ease-in transition-all ease-in-out ">
              Shop now
            </button>
         
        </button>
      </div>
    
    </div>
  );
};

export default ShowGrid;
