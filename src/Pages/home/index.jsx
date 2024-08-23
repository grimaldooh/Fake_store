import React, { useEffect, useState } from 'react'
import Card from '../../Components/utilidades/Card';

export default function Home() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
            .catch(error=>console.error(err));
  }, [])
  console.log(products);

  return (
    <>
    <div>Home</div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, index) => {
            return <Card key={index} item={product} />;
          })}
        </div>
      </div>
    </>
  )
}
