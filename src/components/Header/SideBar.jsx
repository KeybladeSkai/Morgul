import { IoMdClose } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const SideBar = ({ setMenu }) => {
  return (
    <div className="fixed h-screen z-[1000] overflow-hidden ">
      <div className="pointer-events-none fixed  inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"></div>

      <div className="overflow-hidden fixed inset-0">
        <div
          className=" 
    
    flex flex-col justify-between fixed  top-0 left-0 bg-white h-[100vh] min-w-[90vw] py-7 px-4"
        >
          <div className="over-hidden flex flex-col gap-28">
            <div className="flex items-center justify-between">
              <h1 className="text-[1.8rem] font-extrabold">MORGUL</h1>

              <IoMdClose
                onClick={() => setMenu((prev) => !prev)}
                className="cursor-pointer text-3xl opacity-50"
              />
            </div>
            <ul className="flex flex-col text-md gap-3">
              <Link to="/" onClick={() => setMenu((prev) => !prev)}>
                <li className="text-2xl font-medium py-4 px-2 rounded-lg hover:bg-[#fff000]">
                  Home
                </li>
              </Link>
              <Link
                onClick={() => setMenu((prev) => !prev)}
                to="/newCollection"
              >
                <li className="text-2xl font-medium py-4 px-2 rounded-lg hover:bg-[#fff000]">
                  New collections
                </li>
              </Link>
              <li className="text-2xl py-4 px-2 rounded-lg hover:bg-[#fff000] font-medium">
                Artist wears
              </li>
            </ul>
          </div>
          <button className="mb-6 text-xl bg-black text-white  py-4 px-6 rounded-lg flex items-center gap-2">
            <CgProfile className="text-2xl" />
            <h1 className="text-2xl">Sign in</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
