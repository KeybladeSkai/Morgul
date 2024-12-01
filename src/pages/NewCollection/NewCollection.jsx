import { collection } from "../../Data/NewCollection/collection";
import ProductGrid from "../../components/Global/ProductGrid";

const NewCollection = () => {
  return (
    <div className="w-full bg-slate-100 ">
      <ProductGrid data={collection} />
    </div>
  );
};

export default NewCollection;
