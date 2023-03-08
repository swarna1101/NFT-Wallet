import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ProductStyleWrapper from "./Product.style";

const Product = ({ product }) => {
  let nav = useNavigate();
  // console.log(product)
  return (
    <ProductStyleWrapper>
      <div className="product_thumb">
    {/* {product.tokenUri}*/}
    
        <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" alt="thumb" />
      </div>
      <div className="product_details" style={{ color: "white" }}>
        <a>{product.name}</a>
        <br></br>
        <br></br>
        <span><h6>NFT Address</h6> {product.tokenAddress} </span>
        <br></br>
        <br></br>
        <span><h6>Owner</h6> {product.ownerOf} </span>
        <br></br>
        <br></br>
        <p>
          <span><h6>Token ID {product.tokenId}</h6> </span>
          
          <span>
            <FaRegHeart />
          </span>
        </p>
      </div>
    </ProductStyleWrapper>
  );
};

export default Product;
