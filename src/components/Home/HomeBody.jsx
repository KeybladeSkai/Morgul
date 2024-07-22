import woman from "../../assets/Images/woman2.png";
import "../../styles/Home/homebody.css"
const HomeBody = () => {
  return (
    <div className="flex items-center justify-center overflow-hidden">
      <div className=" grided rol  justify-center bg-gray-200 w-[100%] px-40  ">
        <div className="flex flex-col gap-4 border-2 py-16 pl-20">
          <h1 className="flex flex-col text-[110px] leading-[100px] look">
            <span className="fashion relative">Fashion</span>
            <span>Fades,</span>
            <span className="style relative">Style</span>
            <span>Eternal</span>
          </h1>
          <button className="rounded-md border-2 border-black text-white py-2 px-1 font-bold bg-black w-[8rem] hover:w-[40%] hover:border-black hover:bg-[#fff000] hover:text-black hover:transition-all hover:ease-in transition-all ease-in-out ">
            Shop now
          </button>
        </div>

        <div className="self-end w-[100%] h-[100%]">
          <img
            src={woman}
            alt="a picture of three women"
            className="w-[100%] h-[100%]"
          />
        </div>
      </div>

    </div>
  );
};

export default HomeBody;
