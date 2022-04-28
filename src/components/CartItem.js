import { useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";
function CartItem({ item }) {
  const [isHovered, ref] = useHover();
  const { removeFromCart } = useContext(Context);

  return (
    <div className="cart-item">
      <i
        className={`ri-delete-bin-${isHovered ? "fill" : "line"}`}
        onClick={() => removeFromCart(item.id)}
        ref={ref}
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
