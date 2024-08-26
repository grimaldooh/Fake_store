import React, { useEffect, useState, useContext } from 'react'
import Card from '../../Components/utilidades/Card';
import Cart from '../../Components/utilidades/Cart';
import {ShopiContext} from '../../Components/context';
import ProductDetail from '../../Components/utilidades/ProductDetail';

export default function Home() {
  const context = useContext(ShopiContext);
  const [showDetail, setShowDetail] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [cartIndex, setCartIndex] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  console.log(context.items);

  return (
    <>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {context.items.map((products, index) => {
            return <Card key={index} item={products} setShowDetail={setShowDetail} setCurrentItem={setCurrentItem} setShowCart={setShowCart} setCartItems={setCartItems} cartItems={cartItems} setShowOrder={setShowOrder}/>;
          })}
        </div>
        
        {showDetail && <ProductDetail setShowDetail={setShowDetail} currentItem={currentItem}/>}
        {showOrder && <Cart setShowCart={setShowCart} cartItems={cartItems} setCartItems={setCartItems}/>}

        </div>
      
    </>
  )
}
