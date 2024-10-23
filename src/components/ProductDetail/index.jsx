import { useContext } from "react";
import "./styles.css";
import { ShoppingCartContext } from "../../context";

function ProductDetail() {
  const { isProductDetailOpen, closeProductDetail, productToShow } =
    useContext(ShoppingCartContext);

  return (
    isProductDetailOpen && (
      <aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white ">
        <div className="flex justify-between items-center p-6">
          <h2 className="font-medium text-xl">Detail</h2>

          <div onClick={closeProductDetail} className="cursor-pointer">
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
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>

        <figure className="px-6">
          <img
            className="w-full h-full rounded-lg"
            src={productToShow.images[0]}
            alt={productToShow.title}
          />
        </figure>

        <p className="flex flex-col p-6">
          <span className="font-medium text-2xl mb-2">{productToShow.price}</span>
          <span className="font-medium text-md">{productToShow.title}</span>
          <span className="font-light text-sm">
            {productToShow.description}
          </span>
        </p>
      </aside>
    )
  );
}

export default ProductDetail;
