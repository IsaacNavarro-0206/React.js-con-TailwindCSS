import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  // Shopping cart increment quantity
  const [count, setCount] = useState(0);

  // Product detail open/close
  const [isProductDetailOpen, setIsOpenDetailOpen] = useState(false);

  // Product detail show product
  const [productToShow, setProductToShow] = useState({});

  const openProductDetail = () => setIsOpenDetailOpen(true);
  const closeProductDetail = () => setIsOpenDetailOpen(false);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
