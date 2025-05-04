"use client";
import { useEffect } from 'react';
import Link from 'next/link';
import { useCartStore } from '@/store/cart-store';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const PaymentSuccess = () => {

    const { clearCart } = useCartStore();
    useEffect(() => {
        clearCart();
    }, [clearCart]);

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full space-y-8 bg-white rounded-xl shadow-lg p-6">
                <div className="flex justify-center">
                    <CheckCircleIcon className="h-16 w-16 text-green-500" />
                </div>

                <div className="text-center space-y-4">
                    <h1 className="text-2xl font-bold text-gray-900">
                        Payment Successful!
                    </h1>
                    <p className="text-gray-600">
                        Thank you for your purchase. Your payment has been processed successfully.
                    </p>

                    <div className="bg-gray-50 rounded-lg p-4 text-left">
                        <h2 className="text-sm font-medium text-gray-900">Order Summary</h2>
                        <div className="mt-2 space-y-1 text-sm text-gray-600">
                            <p>Order Number: #12345</p>
                            <p>Date: April 07, 2025</p>
                            <p>Total: $99.99</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <Link
                        href="/products"
                        className="w-full inline-flex items-center justify-center px-12 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
                    >
                        Continue Shopping
                    </Link>
                </div>

                <p className="text-center text-sm text-gray-500">
                    Need help? <br />Contact us at{' '}

                    <a
                        href="mailto:shwetangprajapati11@gmail.com"
                        className="text-blue-600 hover:underline"
                    >
                        shwetangprajapati11@example.com
                    </a>
                </p>
            </div>
        </div>
    );
}

export default PaymentSuccess