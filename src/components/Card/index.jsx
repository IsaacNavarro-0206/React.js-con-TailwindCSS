import PropTypes from "prop-types";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";

function Card({ data }) {
  Card.propTypes = {
    data: PropTypes.object.isRequired,
  };

  const {
    count,
    setCount,
    openProductDetail,
    setProductToShow,
    setCartProducts,
    cartProducts,
    openCheckoutSideMenu,
    closeProductDetail,
    closeCheckoutSideMenu,
  } = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    openProductDetail();
    setProductToShow(productDetail);
    closeCheckoutSideMenu(false);
  };

  const addProductsToCart = (productData) => {
    setCount(count + 1);
    setCartProducts([...cartProducts, productData]);
    openCheckoutSideMenu();
    closeProductDetail(false);
  };

  const renderIcon = (id) => {
    const isInCart =
      cartProducts.filter((product) => product.id === id).length > 0;

    if (isInCart) {
      return (
        <button
          type="button"
          className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </button>
      );
    } else {
      return (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();

            addProductsToCart(data);
          }}
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      );
    }
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct(data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 m-2 bg-white/60 rounded-lg text-black text-xs p-1">
          {data?.category.name}
        </span>

        <img
          className="w-full h-full object-cover rounded-lg"
          src={data?.images[0]}
          alt={data?.title}
        />

        {renderIcon(data.id)}
      </figure>

      <p className="flex justify-between">
        <span className="text-sm font-light">{data?.title}</span>
        <span className="text-lg font-medium">${data?.price}</span>
      </p>
    </div>
  );
}

export default Card;
