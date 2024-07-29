import { useState } from "react";
import "../../styles/ProductGrid/ProductGrid.css";
import { BsHandbag } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const ProductGrid = ({ data }) => {
  const [CheckInput, setCheckInput] = useState(false);
  const [filteredItems, setFilteredItems] = useState(data);
  const [cart, addToCart] = useState("");
  console.log(cart);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (e) => {
    e.preventDefault();

    const searchWord = e.target.value;

    setSearchTerm(searchWord);

    const filteredterms = data.filter((items) =>
      items.name.toLowerCase().includes(searchWord.toLowerCase())
    );

    setFilteredItems(filteredterms);

    if (searchWord.length > 0) {
      setCheckInput(true);
    } else {
      setCheckInput(false);
    }
  };

  const removeSearch = () => {
    setSearchTerm("");
    setFilteredItems(data);
    setCheckInput(false);
    console.log(filteredItems);
  };

  return (
    <div className=" mx-auto my-8 md:my-[5rem] px-[2rem] max-w-[1200px] flex flex-col gap-10">
      <div
        className="flex flex-col gap-4 justify-between items-center
      lg:flex-row md:flex-row  "
      >
        <div className=" py-2 border-[1px] border-black px-2 rounded-md flex items-center justify-center ">
          <input
            value={searchTerm}
            type="text"
            className="bg-transparent self-start outline-none w-[80%] md:w-[100%]"
            placeholder="search product"
            onChange={handleInput}
          />
          {CheckInput ? (
            <button onClick={removeSearch}>
              <IoMdClose className="text-2xl cursor-pointer " />
            </button>
          ) : (
            <CiSearch className="text-2xl cursor-pointer" />
          )}
        </div>

        <div className="">
          <ul className="flex gap-6 text-sm md:text-md cursor-pointer ">
            <li className="hover:underline">All </li>
            <li className="hover:underline">Best Sellers</li>
            <li className="hover:underline">Sales Products</li>
          </ul>
        </div>
      </div>

      <section className="section  cursor-pointer overflow-hidden">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, id) => (
            <div key={id} className="flex flex-col gap-4  ">
              <div
                className="overflow-hidden relative  bg-white w-[100%] h-[400px] flex flex-col  justify-center items-center shadow
                hover:shadow-2xl
                hover:shadow-gray-400 "
                key={id}
              >
                <img
                  src={item.img}
                  className="object-contain w-[70%] h-[auto]"
                />
                <button
                  onClick={() => addToCart(item)}
                  className="
                   cursor-pointer
                  hover:bg-black
                  hover:text-white
                         flex gap-2 justify-center items-center w-[80%]  absolute bottom-4 rounded py-2 bg-[#fff000] "
                >
                  <BsHandbag />
                  <div className="text-center">Add to Cart</div>
                </button>
              </div>

              <div className="flex flex-col items-center justify-center gap-2">
                <h2 className="uppercase font-bold">{item.name}</h2>
                <p className="text-opacity">{item.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Not found</p>
        )}
      </section>
    </div>
  );
};

export default ProductGrid;
