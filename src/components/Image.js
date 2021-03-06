import React, { useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

function Image({ img, className }) {
  const [isHovered, ref] = useHover();
  const { toggleFavorite, addToCart, cartItems, removeFromCart } =
    useContext(Context);

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          className="ri-heart-fill icon"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    } else if (isHovered) {
      return (
        <i
          className="ri-heart-line icon"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    }
  }

  function cartIcon() {
    const isAdded = cartItems.some((item) => item.id === img.id);
    if (isAdded) {
      return (
        <i
          className="ri-shopping-cart-fill icon"
          onClick={() => removeFromCart(img.id)}
        ></i>
      );
    } else if (isHovered) {
      return (
        <i
          className="ri-add-circle-line icon"
          onClick={() => addToCart(img)}
        ></i>
      );
    }
  }

  return (
    <div className={`${className} image-container`} ref={ref}>
      <img alt="" src={img.url} className="image-grid" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
