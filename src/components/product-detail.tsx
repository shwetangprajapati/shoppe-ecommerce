"use client";

import Stripe from "stripe";
import Image from "next/image";
import { useCartStore } from "@/store/cart-store";
import Link from "next/link";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
interface Props {
  product: Stripe.Product;
}

export const ProductDetail = ({ product }: Props) => {
  const { items, addItem, removeItem } = useCartStore();
  const price = product.default_price as Stripe.Price;
  const cartItem = items.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const onAddItemWithoutRedirect = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: price.unit_amount as number,
      imageUrl: product.images ? product.images[0] : null,
      quantity: 1,
    });
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Product Image */}
        {product.images && product.images[0] && (
          <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-lg">
            <Zoom>
              <Image
                src={product.images[0]}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </Zoom>
          </div>
        )}

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
              {product.name}
            </h1>
            {price && price.unit_amount && (
              <p className="text-2xl font-semibold text-gray-700 mt-2">
                ${(price.unit_amount / 100).toFixed(2)}
              </p>
            )}
          </div>

          {/* Description */}
          {product.description && (
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          )}

          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-4">
            <div className="flex items-center ">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => removeItem(product.id)}
                  disabled={quantity === 0}
                  className="w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors duration-200"
                >
                  –
                </button>
                <span className="w-10 text-center text-lg font-semibold text-gray-800">
                  {quantity}
                </span>
                <button
                  onClick={onAddItemWithoutRedirect}
                  className="w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors duration-200"
                >
                  +
                </button>
              </div>
            </div>
            {quantity !== 0 && (
              <Link
                href={"/checkout"}
                className=" inline-flex items-center px-12 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
              >
                Buy Now
              </Link>
            )}

          </div>

          {/* Product Features - Card Design */}
          <div className="pt-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Product Highlights
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Exclusive premium quality",
                "Limited edition design",
                "Environmentally friendly",
                "Handcrafted with care",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white p-4  border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-gray-800 rounded-full transition-colors duration-200"></span>
                    <p className="text-gray-600 font-medium">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Return Policy */}
          <div className="pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Return Policy
            </h3>
            <p className="text-gray-600 text-sm">
              Enjoy peace of mind with our 30-day return and exchange policy.
              Return unused items in original packaging within 30 days for a
              full refund or exchange.
            </p>
          </div>

          {/* Shipping Info */}
          <div className="pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Shipping Details
            </h3>
            <p className="text-gray-600 text-sm">
              Free shipping on orders over $50. Ships within 1-2 business days,
              delivered in 3-5 days (US).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};