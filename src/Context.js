import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllPhotos(data));
  }, []);

  function toggleFavorite(id) {
    setAllPhotos((prevPhotos) => {
      return prevPhotos.map((photo) => {
        return photo.id === id
          ? { ...photo, isFavorite: !photo.isFavorite }
          : photo;
      });
    });
  }

  function addToCart(item) {
    setCartItems((previtems) => {
      return [...previtems, item];
    });
  }

  function removeFromCart(id) {
    setCartItems((previtems) => {
      return previtems.filter((item) => {
        return item.id !== id;
      });
    });
  }

  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
