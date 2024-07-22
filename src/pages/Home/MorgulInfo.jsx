import boy from "../../assets/Images/boy.png";
import "../../styles/MorgulInfo/MorgulInfo.css";
const MorgulInfo = () => {
  return (
    <div className="morgulInfo items-center justify-center">
      
      <div className="w-[100%] h-[100%]">
        <img src={boy} alt="a girl" className="" />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="mb-4 text-[160px] leading  DynaPuff font-bold ">
          Flash Sales
        </h1>

        <p className="text-2xl font-normal">
          Spend at least $100 and get a voucher for your next purchase.
        </p>
        <p className="font-bold">Terms & Conditions apply</p>
        <button className="rounded-md border-2 border-black text-white py-2 px-1 font-bold bg-black w-[8rem] hover:w-[40%] hover:border-black hover:bg-white hover:text-black hover:transition-all hover:ease-in transition-all ease-in-out ">
          Shop now
        </button>
      </div>
    </div>
  );
};

export default MorgulInfo;
