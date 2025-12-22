import React from "react";
import { FaHeart, FaShoppingCart, FaEye, FaStar } from "react-icons/fa";
import productImg from "../assets/images/sun-cream.PNG"; // Replace with actual path
import "../assets/css/ProductCard.css";

const ProductCard = () => {
  return (
    <section className="product-section">
      <div className="product-card">
        {/* Product Image */}
        <div
  className="product-image"
  style={{ backgroundImage: `url(${productImg})` }}
></div>

        {/* Product Details */}
        <div className="product-details">
          <h2 className="product-title">Sun Creams</h2>
          <p className="product-description">
            It is a long established fact content of a page when. It is a long
            established fact content of a page when. It is a long established
            fact content of a page when.
          </p>

          <p className="product-price">$60.68</p>
          <p className="product-rating">
            4.0 <FaStar className="star" /><FaStar className="star" /><FaStar className="star" /><FaStar className="star" />
          </p>

          <div className="product-icons">
            <FaHeart title="Wishlist" />
            <FaEye title="View" />
            <FaShoppingCart title="Add to Cart" />
          </div>

          <button className="more-details">More Details...</button>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
