import React from "react";
import { FaShoppingCart } from 'react-icons/fa';



export default function Card({ item, setShowDetail, setCurrentItem, setShowOrder, setCartItems, cartItems }) {
  const handleShowDetail = () => {
    setShowDetail(true);
    setCurrentItem(item);
  }

  const handleAddToCart = () => {
    setShowOrder(true);
    const newCartItems = [...cartItems];
    newCartItems.push(item);
    setCartItems(newCartItems);
  }

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
    <div className="flex justify-center">
      <a href="#">
      <div onClick={handleShowDetail} className="cursor-pointer">
        <img 
          className="rounded-t-lg" 
          src={item.image} 
          alt={item.title} 
          style={{ 
            maxHeight: "150px", 
            maxWidth: "150px", 
            objectFit: "cover", 
            marginTop: "20px", 
            marginBottom: "20px", 
            padding: "20px" 
          }}
        />
      </div>      
      </a>
    </div>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item.title}
          </h5>
        </a>
    
        <p className="mb-3 font-bold text-lg text-gray-900 dark:text-white">
          ${item.price}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Rating: {item.rating.rate} ({item.rating.count} reviews)
        </p>
        <div onClick={handleAddToCart} className="cursor-pointer">

        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
          
          Add to Cart
          <FaShoppingCart className="w-4 h-4 ml-2" />

        </a>
        </div>
      </div>
      
    </div>
  );
}
