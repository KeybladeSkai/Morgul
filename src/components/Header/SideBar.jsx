import { IoMdClose } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const SideBar = ({ setMenu }) => {
  return (
    <div className="fixed z-[1000] inset-0 overflow-hidden">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out"></div>

      <div className="fixed inset-0 flex">
        <div className="flex flex-col justify-between bg-white h-full w-[90vw] py-7 px-4">
          <div className="flex flex-col gap-12">
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
          <button className="mt-auto mb-6 text-xl bg-black text-white py-4 px-6 rounded-lg flex items-center gap-2">
            <CgProfile className="text-2xl" />
            <h1 className="text-2xl">Sign in</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
