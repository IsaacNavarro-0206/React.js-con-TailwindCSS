import { useContext } from "react";
import "./styles.css";
import { ShoppingCartContext } from "../../context";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../utils";

function CheckoutSideMenu() {
  const {
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    cartProducts,
    setCartProducts,
  } = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter(
      (product) => product.id !== id
    );

    setCartProducts(filteredProducts);
  };

  return (
    isCheckoutSideMenuOpen && (
      <aside className="checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white">
        <div className="flex justify-between items-center p-6">
          <h2 className="font-medium text-xl">My Order</h2>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 cursor-pointer"
            onClick={closeCheckoutSideMenu}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>

        <div className="px-6 overflow-y-scroll">
          {cartProducts.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              imageUrl={product.images[0]}
              handleDelete={handleDelete}
            />
          ))}
        </div>

        <div className="px-6">
          <p className="flex justify-between items-center">
            <span className="font-light">Total:</span>
            <span className="font-medium text-2xl">
              ${totalPrice(cartProducts)}
            </span>
          </p>
        </div>
      </aside>
    )
  );
}

export default CheckoutSideMenu;
