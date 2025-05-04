import Image from 'next/image';
import Link from 'next/link';
import Stripe from 'stripe';

interface Props {
  product: Stripe.Product;
}

const HeroSection = async ({ product }: Props) => {

  const price = product.default_price as Stripe.Price;
  const actualPrice = price?.unit_amount ? price.unit_amount / 100 : 0;
  const fakeOriginalPrice = (actualPrice * 1.25).toFixed(2);
  
  return (
    <section className="bg-gray-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {product.name}
            </h1>
            <p className="text-lg text-gray-600">
              {product.description}
            </p>
            <div className="flex items-center space-x-4">

              {/* Actual Price */}
              <span className="text-3xl font-semibold text-gray-900">
                ${actualPrice.toFixed(2)}
              </span>

               {/* Fake Original Price */}
               <span className="text-sm text-gray-500 line-through">
                ${fakeOriginalPrice}
              </span>

              <span className="text-sm font-medium text-red-600">
                20% OFF
              </span>
            </div>
            <div className="flex space-x-4">
              <Link
                href={`/products/${product.id}`}
                className="inline-flex items-center px-12 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
              >
                Shop Now
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;