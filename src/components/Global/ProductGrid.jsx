import { useState } from "react";
import "../../styles/ProductGrid/ProductGrid.css";
import { BsHandbag } from "react-icons/bs";

const ProductGrid = ({ data }) => {
  const [filteredItems, setFilteredItems] = useState(data);

  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (e) => {
    e.preventDefault();

    const searchWord = e.target.value;
    setSearchTerm(searchWord);

    const filteredterms = data.filter((items) =>
      items.name.toLowerCase().includes(searchWord.toLowerCase())
    );
    setFilteredItems(filteredterms);
  };

  return (
    <div className="mx-auto my-[5rem] px-[2rem] max-w-[1200px] flex flex-col gap-10">
      <div className="flex justify-between items-center">
        <input
          value={searchTerm}
          type="text"
          className="py-2 border-[1px] border-black px-2 rounded-md"
          placeholder="search product"
          onChange={handleInput}
        />

        <div>
          <ul className="flex gap-6 text-md cursor-pointer ">
            <li className="hover:underline">All </li>
            <li className="hover:underline">Best Sellers</li>
            <li className="hover:underline">Sales Products</li>
          </ul>
        </div>
      </div>

      <section className="section ">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, id) => (
            <div key={id} className=" flex flex-col gap-4  ">
              <div
                className="relative  bg-white w-[100%] h-[350px] flex flex-col  justify-center items-center shadow "
                key={id}
              >
                <img
                  src={item.img}
                  className="object-contain w-[70%] h-[auto]"
                />
                <div className="flex gap-2 justify-center items-center w-[100%]   absolute bottom-0 py-2 bg-[#fff000] w-100%">
                  <BsHandbag />
                  <span className="text-center">Add to Cart</span>
                </div>
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
