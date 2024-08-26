import React, { useEffect } from 'react';
import { MdGpsFixed } from 'react-icons/md';

export default function ProductDetail({ setShowDetail, currentItem }) {
  

  return (
    <aside className="w-[360px] h-[calc(100vh-80px)] top-[68px] flex flex-col fixed right-0 border border-gray-200 rounded-lg shadow-lg bg-white z-50">
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="font-semibold text-xl text-gray-800">Product Details</h2>
        <div 
          onClick={() => {}} 
          className="cursor-pointer text-gray-500 hover:text-gray-700 transition-colors"
        >
          <MdGpsFixed size={24} /> 
        </div>
        <button 
          onClick={() => setShowDetail(false)} 
          className="ml-2 text-gray-500 hover:text-gray-700 transition-colors"
        >
          Close
        </button>
      </div>
      <figure className="p-4">
        <img 
          className="w-72 h-72 object-cover rounded-lg" 
          src={currentItem.image} 
          alt={currentItem.title}
        />
      </figure>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{currentItem.title}</h3>
        <p className="text-xl text-gray-700 mb-4">${currentItem.price}</p>
        <p className="text-gray-600">{currentItem.description}</p>
      </div>
    </aside>
  );
}
