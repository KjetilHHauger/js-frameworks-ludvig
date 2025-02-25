import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../store";

export function SpecificProduct() {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState(false);
  const { cart, addToCart } = useCart();
  const api = "https://v2.api.noroff.dev/rainy-days/";

  console.log(cart);

  useEffect(() => {
    async function getProducts() {
      const res = await fetch(api + id);
      const data = await res.json();
      console.log(data);
      setProduct(data.data);
    }
    getProducts();
  }, []);

  return (
    <>
      <h1>Specific product</h1>
      {product ? (
        <div>
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
            <button
              onClick={() => {
                addToCart(product);
              }}
              className="border p-1"
            >
              Purchase
            </button>
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}
