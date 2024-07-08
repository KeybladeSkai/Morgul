import { BsCart3 } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
const Header = () => {
  return (
    <div className="flex justify-around items-center p-4 bg-white shadow-lg">
      <h1 className="text-3xl font-bold">Morgul</h1>
      <div className="flex gap-6 cursor-pointer justify-center items-center">
        <h2 className="hover:underline border-[1px]  rounded-full py-1 px-2">New Collection</h2>
        <h2 className="hover:underline">Artist wears</h2>
        <h2 className="hover:underline">Men</h2>
        <h2 className="hover:underline">Women</h2>
        <h2 className="hover:underline">Kids</h2>
      </div>
        <input type="text" className="border-[1px] border-gray-800 p-r-2 pl-4 py-[2px] rounded-full placeholder:text-sm" placeholder="search for product" />
      <div className="flex gap-4 justify-center items-center">
        <BsCart3 className="text-xl"/>
          <IoMdContact className="text-2xl" />

      </div>
    </div>
  );
};

export default Header;
