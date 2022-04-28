import { useContext, useState } from "react";
import CartItem from "../components/CartItem";
import { Context } from "../Context";

function Cart() {
  const { cartItems, emptyCart } = useContext(Context);
  const [buttonText, setButtonText] = useState("Place Order");
  const total = cartItems.length * 5.99;
  const totalDisplay = total.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  function placeOrder() {
    setButtonText("Ordering...");
    setTimeout(() => {
      console.log("Order placed!");
      setButtonText("Place Order");
      emptyCart();
    }, 3000);
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {totalDisplay}</p>
      <button onClick={placeOrder} className="order-button">
        {buttonText}
      </button>
    </main>
  );
}

export default Cart;
