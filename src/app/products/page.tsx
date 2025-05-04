import ProductList from '@/components/product-listing'
import { stripe } from '@/lib/stripe';
import React from 'react'
const ProductPage = async() => {
    const products = await stripe.products.list({
      expand: ["data.default_price"],
    });
  
  return (
    <>
    <div className="min-h-screen bg-gray-50 text-black p-6 flex flex-col items-center">
      <div className="mb-8 text-center max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Our Exclusive Collection
            </h1>
        <p className="text-lg text-gray-600 mt-2">Explore the finest selection of footwear</p>
      </div>
      <ProductList products={products.data}/>
    </div>
    </>
  )
}

export default ProductPage