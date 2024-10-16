import PropTypes from "prop-types";

function Card({ title, category, price, image }) {
  Card.propTypes = {
    title: PropTypes.node.isRequired,
    category: PropTypes.node.isRequired,
    price: PropTypes.node.isRequired,
    image: PropTypes.node.isRequired,
  };

  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 m-2 bg-white/60 rounded-lg text-black text-xs p-1">
          {category}
        </span>

        <img
          className="w-full h-full object-cover rounded-lg"
          src={image[0]}
          alt={title}
        />

        <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
          +
        </div>
      </figure>

      <p className="flex justify-between">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-medium">${price}</span>
      </p>
    </div>
  );
}

export default Card;
