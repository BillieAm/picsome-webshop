import { useContext } from "react";
import CartItem from "../components/CartItem";
import { Context } from "../Context";

function Cart() {
  const { cartItems } = useContext(Context);

  const cartItemElements = cartItems.map((item) => <CartItem item={item} />);
  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: </p>
      <button className="order-button">Place Order</button>
    </main>
  );
}

export default Cart;
