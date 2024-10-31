import { useState, useEffect } from "react";
import Card from "../../components/Card";
import ProductDetail from "../../components/ProductDetail";

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>

      <ProductDetail />
    </>
  );
}

export default Home;
