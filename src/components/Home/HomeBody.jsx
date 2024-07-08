import woman from "../../assets/Images/woman2.png";
import "../../styles/Home/homebody.css"
const HomeBody = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-2 rol items-center justify-center bg-gray-200 w-[100%] px-40  h-[90vh]">
        <div className="flex flex-col gap-4 border-2 ">
          <h1 className="flex flex-col text-[90px] leading-[92px] look">
            <span className="fashion relative">Fashion</span>
            <span>Fades,</span>
            <span className="style relative">Style</span>
            <span>Eternal</span>
          </h1>
          <button className="rounded-md border-2 border-black text-white py-2 px-1 font-bold bg-black w-[8rem] hover:w-[40%] hover:border-black hover:bg-[#fff000] hover:text-black hover:transition-all hover:ease-in transition-all ease-in-out ">
            Shop now
          </button>
        </div>

        <div className="self-end">
          <img
            src={woman}
            alt="a picture of three women"
            className=""
          />
        </div>
      </div>

    </div>
  );
};

export default HomeBody;
