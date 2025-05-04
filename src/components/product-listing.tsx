import React from "react";
import ProductCard from "./product-card";
import Stripe from "stripe";
interface Props {
  products: Stripe.Product[];
}

const ProductList = ({ products }: Props) => {
  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
  );
};

export default ProductList;
