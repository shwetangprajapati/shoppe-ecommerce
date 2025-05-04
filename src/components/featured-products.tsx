import Stripe from 'stripe';
import ProductCard from './product-card';

interface Props {
  products: Stripe.Product[];
  title: string
}
const ProductSections = ({ products,title }: Props) => {

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
           <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSections;