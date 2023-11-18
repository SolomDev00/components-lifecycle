import { useEffect, useState } from "react";

const HooksPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products", { signal });
        const jsonData = await res.json();
        setProducts(jsonData.products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <h2>useEffect Hook</h2>
      {products.length ? (
        products.map(({ id, title }: { id: number; title: string }) => (
          <p key={id}>{title}</p>
        ))
      ) : (
        <h3>Loading ...</h3>
      )}
    </div>
  );
};

export default HooksPage;
