import { BsCart3 } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import "../../styles/Header/header.css";
import Cart from "./Cart";
import { useState, useEffect } from "react";

import SideBar from "./SideBar";
const Header = () => {
  const [open, setOpen] = useState(false);

  const [menu, setMenu] = useState(false);
  useEffect(() => {
    if (menu) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [menu]);

  return (
    <div className="relative z-[1000] w-[100vw] overflow-hidden px-6 border-[1px] border-b-slate-100 col-span-12 flex justify-between items-center text-black py-4 md:px-14 md:justify-around bg-white shadow">
      <Link to="/">
        <h1 className="text-2xl font-extrabold ">MORGUL</h1>
      </Link>

      <div className="hidden lg:flex gap-6 cursor-pointer justify-center items-center sm:hidden">
        <Link to="/newCollection">
          <h2 className="hover:underline py-1 px-2 ">COLLECTIONS</h2>
        </Link>
        <h2 className="hover:underline">ARTIST WEARS</h2>
      </div>
      {/* <input
        type="text"
        className="hidden lg:block border-[1px] border-gray-800 p-r-2 pl-4 py-[2px] rounded-full placeholder:text-sm"
        placeholder="search for product"
      /> */}

      <div className="cursor-pointer flex gap-4 justify-center items-center">
        <button onClick={() => setOpen((prev) => !prev)}>
          <BsCart3 className="text-xl cursor-pointer md:block lg:block block" />
        </button>
        <IoMdContact className="hidden text-2xl cursor-pointer md:block" />
        <button
          onClick={() => setMenu((prev) => !prev)}
          className="block sm:block lg:hidden"
        >
          <FiMenu className="cursor-pointer text-2xl " />
        </button>
      </div>
      {Cart && <Cart open={open} setOpen={setOpen} />}
      {menu && <SideBar setMenu={setMenu} />}
    </div>
  );
};

export default Header;
