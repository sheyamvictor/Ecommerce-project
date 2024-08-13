import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const Context = createContext();

export const CartProvider = ({ children }) => {
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const fetchCartItemCount = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/addCard");
        if (res.status === 200) {
          setCartItemCount(res.data.data.length);
        }
      } catch (error) {
        console.error("Error fetching cart item count:", error);
      }
    };

    fetchCartItemCount();
  }, []);

  return (
    <Context.Provider value={{ cartItemCount, setCartItemCount }}>
      {children}
    </Context.Provider>
  );
};

export const useCart = () => useContext(Context);
