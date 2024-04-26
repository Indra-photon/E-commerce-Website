import React from 'react'
import {Link} from "react-router-dom";
import axios from 'axios'



const ProductCard = ({title, price, imgURL}) =>{

  const fetchCarts = async ( ) => {
    const quantity = prompt ("How many items do you want to take ? ")
    const res = await axios.post("http://localhost:2000/carts", {title, price, quantity});
    if (res.status === 201) {
      alert ("Product added to cart successfully")
    }
    console.log(res.data._id)
  };


  return (
    
    <div>
        <div className='border-2 p-4 m-4 rounded w-60 h-80 cursor-pointer '>
          <section className='flex justify-center h-4/5 '>
            <img src= {imgURL} alt='shirts'></img>
          </section>
          
          <h2 className='my-2 text-white'>{title}</h2>
          <div className='flex justify-between items-center'>
            <p>Price: {price}</p>
            {/* <button className='bg-yellow-400 p-1 rounded text-sm font-medium'> Add to cart </button> */}
            <button onClick = {fetchCarts} className='bg-yellow-400 p-1 rounded text-sm font-medium'><Link to = "/cart">Add to cart</Link></button>
          </div>          
        </div>
    </div>
  )
}

export default ProductCard