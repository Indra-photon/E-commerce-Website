import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'

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
  <div className = 'flex-col bg-slate-300 h-screen w-screen justify-center'>
    <section className = 'flex text-3xl pt-10 pb-10 font-bold justify-center align-center w-screen'><h1>Your Cart</h1></section>
    <section>
      <ul className = 'border-4 bg-sky-800 mx-32 rounded-3xl'>
        {Id.map((cart) => (
          <li key={cart._id} className = 'flex justify-center gap-5 text-2xl font-semibold py-1'>
            <p>Title: {cart.title}</p>
            <p>Price: {cart.price}</p>
          </li>
        ))}
      </ul>
    </section>
    <section className = 'flex justify-center mt-10'>
    <button onClick = {handleClearCart} className = 'text-xl p-1 bg-sky-400 rounded-xl border-2'> Clear cart </button>
    </section>
  </div>
  )
}

export default Cart
