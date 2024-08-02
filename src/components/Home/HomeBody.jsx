import woman from "../../assets/Images/woman2.png";
import "../../styles/Home/homebody.css";
const HomeBody = () => {
  return (
    <div className="w-[100vw] items-center pt-12 md:pt-1 place-content-center overflow-hidden col-span-12 bg-gray-200 flex md:gap-14 md:flex-row flex-col px-2 md:min-h-[45vh] lg:h-[90vh]">
      <div className="md:ml-12 col-start-2 col-end-7 image-box flex flex-col gap-2 md:py-12 md:items-start">
        <h1 className="items-center  text-[4rem]  flex flex-col  look md:items-start lg:leading-[6rem] lg:text-[6rem] leading-[5rem]">
          <span className="fashion relative">Fashion</span>
          <span>Fades,</span>
          <span className="style relative">Style</span>
          <span>Eternal</span>
        </h1>
        <button className="self-center md:self-start rounded-md border-2 border-black text-white py-2 px-1 font-bold bg-black w-[8rem] sm:hover-w[8rem] md:hover:w-[40%] hover:border-black hover:bg-[#fff000] hover:text-black hover:transition-all hover:ease-in transition-all ease-in-out ">
          Shop now
        </button>
      </div>

      <img
        src={woman}
        alt="a picture of three women"
        className="md-[100%px] lg:w-[50%] object-contain"
      />
    </div>
  );
};

export default HomeBody;
