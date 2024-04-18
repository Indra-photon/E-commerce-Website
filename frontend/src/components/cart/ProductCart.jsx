import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'


const ProductCart = ({title, price}) => {
    
  return (
    <div>
        <section className = 'flex gap-5'>
          <h1> {title} </h1>
          <h1> {price} </h1>
        </section>
    
      
    </div>
  )
}

export default ProductCart
