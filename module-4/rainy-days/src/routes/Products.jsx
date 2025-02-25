import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const api = "https://v2.api.noroff.dev/rainy-days/";

export function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const res = await fetch(api);
      const data = await res.json();
      console.log(data.data);
      setProducts(data.data);
    }
    getProducts();
  }, []);
  return (
    <>
      <h1 className="text-3xl font-bold p-2">Products</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {products.map((product) => {
          return (
            <Link
              to={"/product/" + product.id}
              key={product.id}
              className="border max-w-64 cursor-pointer hover:shadow-xl p-2 rounded-lg"
            >
              <img
                src={product.image.url}
                alt={product.image.alt}
                className="h-64"
              />
              <div>
                <h2 className="text-2xl font-bold">{product.title}</h2>
                <p>{product.description}</p>
                {product.onSale ? (
                  <>
                    <p className="line-through">{product.price}</p>
                    <p>{product.discountedPrice}</p>
                  </>
                ) : (
                  <p>{product.price}</p>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
