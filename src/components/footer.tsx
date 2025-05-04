// app/components/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Shoppe. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
          <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/products" className="text-sm text-gray-600 hover:text-gray-900">
              Products
            </Link>
            <Link href="/checkout" className="text-sm text-gray-600 hover:text-gray-900">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;