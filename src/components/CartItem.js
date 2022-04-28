import { useContext, useState } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";
function CartItem({ item }) {
  const [trashHovered, setTrashHovered] = useState(false);
  const { removeFromCart } = useContext(Context);

  return (
    <div className="cart-item">
      <i
        className={`ri-delete-bin-${trashHovered ? "fill" : "line"}`}
        onClick={() => removeFromCart(item.id)}
        onMouseEnter={() => setTrashHovered(true)}
        onMouseLeave={() => setTrashHovered(false)}
      ></i>
      <img src={item.url} width="130" alt="" />
      <p>$5.99</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default CartItem;
