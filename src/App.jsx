import { useState,useEffect } from 'react'
import Navbar from './Navbar';
import './App.css'

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) =>setProducts(data))
  }, []);
  return (
    <>
    <Navbar/>
   <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">المنتجات</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (

          <div key={product.id} className="bg-white rounded-lg shadow-lg p-4">
              <img src={product.image}  className="w-full h-48 object-contain mb-4" />
            <h2 className="text-lg font-bold mb-2">{product.title}</h2>
            <p className="text-gray-500">${product.price}

            </p>
          </div>
        ))}
      </div>
    </div>
  
    </>
  )
}

export default App
