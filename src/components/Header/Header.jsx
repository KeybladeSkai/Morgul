import { BsCart3 } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import "../../styles/Header/header.css";
import Cart from "./Cart";
import { useState } from "react";
const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="w-[100vw] overflow-hidden px-6 border-[1px] border-b-slate-400 col-span-12 flex justify-between items-center text-black z-50 py-4 md:px-14 md:justify-around bg-white shadow">
      <Link to="/">
        <h1 className="text-2xl font-extrabold ">MORGUL</h1>
      </Link>

      <div className="hidden lg:flex gap-6 cursor-pointer justify-center items-center sm:hidden">
        <Link to="/newCollection">
          <h2 className="hover:underline py-1 px-2 ">Collections</h2>
        </Link>
        <h2 className="hover:underline">Artist wears</h2>
      </div>
      {/* <input
        type="text"
        className="hidden lg:block border-[1px] border-gray-800 p-r-2 pl-4 py-[2px] rounded-full placeholder:text-sm"
        placeholder="search for product"
      /> */}

      <div className="cursor-pointer flex gap-4 justify-center items-center">
        <button onClick={()=>setOpen(prev=>!prev)}>
          <BsCart3 className="text-xl cursor-pointer md:block lg:block block" />
        </button>
        <IoMdContact className="hidden text-2xl cursor-pointer md:block" />
        <FiMenu className="cursor-pointer text-2xl block sm:block lg:hidden" />
      </div>
      {
        Cart &&(<Cart open={open} setOpen={setOpen}/>)
      }
    </div>
  );
};

export default Header;
