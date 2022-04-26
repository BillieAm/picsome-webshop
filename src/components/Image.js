import React, { useState } from "react";

function Image({ img, className }) {
  const [hovered, setHovered] = useState(false);

  const heartIcon = hovered && <i className="ri-heart-line icon"></i>;
  const cartIcon = hovered && <i className="ri-add-circle-line icon"></i>;

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img alt="" src={img.url} className="image-grid" />
      {heartIcon}
      {cartIcon}
    </div>
  );
}

export default Image;
