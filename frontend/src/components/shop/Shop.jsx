import React, { useState } from 'react'
import axios from 'axios'
import { useEffect} from 'react';
import ProductCard from './ProductCard';


const fetchProducts = async () => {
  try {
      const res = await axios.get("http://localhost:2000/products");
      const data = res.data;
      //console.log(data)
      return data; // Assuming your data is in res.data
  } catch (error) {
      console.error("Error fetching products:", error);
  }
};



const Shop = () => {

  const [data, setData] = useState([]);

  const assignData = async () => {
    const fetchedData = await fetchProducts()
    setData(fetchedData)
  }


  useEffect (() => {        /* Two arguements: a callback function, an array (called dependency array) */
    assignData()
  }, []);


  return (


    <div>
      <h1 className='m-4 text-xl font-semibold'>All Products</h1>
      <div className='flex box-border w-full flex-wrap justify-center'>
        {
          data.map((product) =>{
            return (
              <ProductCard
              key={product._id}
              title={product.title}
              price={product.price}
              imgURL={product.imgURL}
              />
            );
          })
        }
      </div>


    </div>
  )
}

export default Shop