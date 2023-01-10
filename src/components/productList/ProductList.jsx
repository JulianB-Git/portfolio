import Product from "../product/Product";
import "./productList.scss";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="product-list">
      <div className="content">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">
          This is my portfolio that show cases projects and technologies I have
          worked with. You can find these projects on my GitHub (Link in the
          header).
        </span>
      </div>
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
