import { useContext } from "react";
import { GlobalState } from "../../../GlobalState";
import ProductList from "../utils/Productlist";

function Product() {
  const state = useContext(GlobalState);
  const {products = [] } = state.productApi.products;

  return (
    <>
      <div>
        {products.map((product) => {
          return <ProductList key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}

export default Product;
