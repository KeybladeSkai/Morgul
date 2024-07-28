import Header from "../../components/Header/Header";

import { collection } from "../../Data/NewCollection/collection";
import { useState } from "react";
import ProductGrid from "../../components/Global/ProductGrid";
import Footer from "../Home/Footer";
const NewCollection = () => {

  return (
    <div className="w-full ">
      <Header />
      <ProductGrid data={collection}/>
      <Footer/>
    </div>
  );
};

export default NewCollection;
