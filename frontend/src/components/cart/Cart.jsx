import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import ProductCart from './ProductCart'

const fetchCarts = async () => {
  try {
      const res = await axios.get("http://localhost:2000/carts");
      const data = res.data;
      return data; // Assuming your data is in res.data
  } catch (error) {
      console.error("Error fetching carts:", error);
  }
};


const deleteCarts = async () => {
  try {
      const res = await axios.delete("http://localhost:2000/carts");
      return true;
  } catch (error) {
      console.error("Error in deleting carts:", error);
      return false;
  }
}; 


const Cart = () => {

  const [Id, setId] = useState([]);

  const assignId = async () => {
    const fetchedId = await fetchCarts()
    setId(fetchedId)
    console.log(fetchedId)
  }


  useEffect (() => {        /* Two arguements: a callback function, an array (called dependency array) */
    assignId()
  }, []);

  const handleClearCart = async () => {
    const success = await deleteCarts();
    if (success) {
      // If carts are successfully deleted, update the component state
      setId([]);
    }
  };

  return (
    <div className='flex-col bg-slate-300 h-screen w-full justify-center'>
      <section className='flex justify-center'>
        <h1 className='text-3xl font-bold text-white'>Your Cart</h1>
      </section>

      <div className='bg-white mt-8 rounded-lg shadow-lg'>
        <div className='p-4'>
          {Id.length > 0 ? (
            <div className='divide-y divide-gray-200'>
              {Id.map((product) => (
                <div key={product._id} className='py-4'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                      <div>
                        <h2 className='text-lg font-semibold'>{product.title}</h2>
                        <p className='text-gray-600'>Price: ${product.price}</p>
                      </div>
                    </div>
                    <div className='flex items-center'>
                      <input
                        type='number'
                        min='1'
                        className='border rounded-md px-2 py-1 mr-2 w-16 text-center'
                        value={product.quantity}
                        onChange={(e) => handleQuantityChange(e, product)}
                      />
                      <button
                        className='text-red-500 font-semibold'
                        onClick={() => handleRemoveProduct(product)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className='text-lg text-gray-600 py-4'>Your cart is empty.</p>
          )}
        </div>
        <div className='p-4 bg-gray-100 flex justify-between items-center'>
          <p className='text-lg font-semibold'>Total: $X.XX</p>
          <button className='bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600'>
            Checkout
          </button>
        </div>
      </div>
      <div className = 'flex justify-end items-end p-5'><button onClick = {handleClearCart} className = 'text-xl p-1 bg-sky-400 rounded-xl border-2'> Clear cart </button></div>
</div>

  
  )
}

export default Cart
