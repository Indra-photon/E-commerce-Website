import React from 'react'


const ProductCart = ({title, price, quantity}) => {
    
  return (
    <div>
        <section className = 'flex gap-5'>
          <h1> {title} </h1>
          <h1> {price} </h1>
          <h1> {quantity}</h1>
        </section>
    
      
    </div>
  )
}

export default ProductCart
