import React from 'react'
import Stripe from 'stripe';
import Image from 'next/image';
import Link from 'next/link';
interface Props {
  product: Stripe.Product;
}
const ProductCard = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;

  return (
    <div
      key={product.id}
      className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="relative h-64">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-700">
          {product.name}
        </h3>
        {price && price.unit_amount && (
          <p className="text-gray-600 mt-1">
            ${(price.unit_amount / 100).toFixed(2)}
          </p>
        )}
        <Link
          href={`/products/${product.id}`}
          className="mt-3 inline-block text-sm font-medium text-black hover:text-gray-700"
        >
          View Product 
        </Link>
      </div>
    </div>
  )
}

export default ProductCard