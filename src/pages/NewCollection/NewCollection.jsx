import Header from "../../components/Header/Header";

import { collection } from "../../Data/NewCollection/collection";
import ProductGrid from "../../components/Global/ProductGrid";
import Footer from "../Home/Footer";
const NewCollection = () => {

  return (
    <div className="w-full bg-slate-100">
      <Header />
      <ProductGrid data={collection}/>
      <Footer/>
    </div>
  );
};

export default NewCollection;
