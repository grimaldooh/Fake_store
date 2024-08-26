import React from "react";
import { MdGpsFixed } from "react-icons/md";

export default function Cart({ setOrder, cartItems, setCartItems }) {
  const handleRemoveItem = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <aside className="w-[360px] h-[calc(100vh-80px)] top-[68px] flex flex-col fixed right-0 border border-gray-200 rounded-lg shadow-lg bg-white z-50">
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="font-semibold text-xl text-gray-800">Cart</h2>
        <div
          onClick={() => {}}
          className="cursor-pointer text-gray-500 hover:text-gray-700 transition-colors"
        >
          <MdGpsFixed size={24} />
        </div>
        <button
          onClick={() => setOrder(false)}
          className="ml-2 text-gray-500 hover:text-gray-700 transition-colors"
        >
          Close
        </button>
      </div>

      <ul className="p-4 overflow-y-auto">
        {cartItems.map((item, index) => (
          <li key={index} className="flex items-center mb-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 object-cover rounded-lg mr-4"
            />
            <div className="flex-1">
              <span className="font-medium text-gray-900">{item.title}</span>
              <span className="block text-gray-700">${item.price}</span>
            </div>
            <button
              onClick={() => handleRemoveItem(index)}
              className="ml-4 px-2 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
