import { useState, useEffect } from "react";
import Card from "../../components/Card";

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card
            title={item.title}
            category={item.category.name}
            price={item.price}
            image={item.images}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
