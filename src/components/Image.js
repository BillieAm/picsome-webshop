import React, { useState, useContext } from "react";
import { Context } from "../Context";

function Image({ img, className }) {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite } = useContext(Context);

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          className="ri-heart-fill icon"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line icon"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    }
  }

  const cartIcon = hovered && <i className="ri-add-circle-line icon"></i>;

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img alt="" src={img.url} className="image-grid" />
      {heartIcon()}
      {cartIcon}
    </div>
  );
}

export default Image;
