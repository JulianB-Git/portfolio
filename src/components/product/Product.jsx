import "./product.scss";

const Product = ({ product }) => {
  const { link, img } = product;

  return (
    <div className="product">
      <div className="browser">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" />
      </a>
    </div>
  );
};

export default Product;
