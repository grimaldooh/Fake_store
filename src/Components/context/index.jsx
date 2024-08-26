import { useState, useEffect,createContext } from 'react';

export const ShopiContext = createContext();

export const ShopiProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [showDetail, setShowDetail] = useState(false);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(data=>setItems(data))
                .catch(error=>console.error(error));
      }, []);

  return (
    <ShopiContext.Provider value={{items, setItems, showDetail, setShowDetail}}>{children} </ShopiContext.Provider>
  )
}
