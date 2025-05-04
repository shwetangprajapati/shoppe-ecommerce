"use client";

import { useCartStore } from "@/store/cart-store";
import { checkoutAction } from "./checkout-action";

export default function CheckoutPage() {
  const { items, removeItem, addItem } = useCartStore();
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
        <div className="text-center py-8 px-12">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Your Cart is Empty</h1>
          <p className="text-gray-600">Add some items to start shopping!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight text-center mb-8">
        Checkout
      </h1>

      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 border border-gray-200 rounded-lg overflow-hidden  transition-shadow mx-4 mt-4">
          <h2 className="text-2xl font-bold text-gray-800">Order Summary</h2>
        </div>

        <div className="p-6">
          <ul className="space-y-6">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex flex-col gap-3 pb-6 border-b border-gray-200 last:border-b-0 border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow p-4 -mx-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">{item.name}</span>
                  <span className="font-semibold text-gray-800">
                    ${((item.price * item.quantity) / 100).toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors duration-200"
                  >
                    –
                  </button>
                  <span className="w-10 text-center text-lg font-semibold text-gray-800">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => addItem({ ...item, quantity: 1 })}
                    className="w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors duration-200"
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-4 border-t border-gray-200 border border-gray-200 rounded-lg overflow-hidden transition-shadow p-4 -mx-2">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium text-gray-700">Total:</span>
              <span className="text-xl font-bold text-gray-800">
                ${(total / 100).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>

      <form action={checkoutAction} className="max-w-2xl mx-auto mt-8">
        <input type="hidden" name="items" value={JSON.stringify(items)} />
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center px-12 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-100"
        >
          Proceed to Payment
        </button>
      </form>
    </div>
  );
}