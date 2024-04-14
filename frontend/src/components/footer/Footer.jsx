import React from 'react'

function Footer() {
  return (
    <div className='bg-yellow-400 flex gap-10 justify-center items-center'>
      <section className='quick-links flex-col p-5'>
        <h1 className='text-2xl'> Quick Links</h1>
        <p>Men's cloths</p>
        <p>Women's clothes</p>
        <p>children section</p>
      </section>
      <section className='best-of-category'>
      <h1 className='text-2xl'> Best of Categories</h1>
        <p>Clothes</p>
        <p>Home decor</p>
        <p> Terracota</p>
      </section>
      <section className='follow-us'>
      <h1 className='text-2xl'> Follow Us</h1>
        <div className='flex gap-5 pt-5'>
        <img src='.\src\assets\social-img\linkedin.png' className='h-5 w-5'></img>
        <img src='.\src\assets\social-img\facebook.png' className='h-5 w-5'></img>
        <img src='.\src\assets\social-img\whatsapp.png' className='h-5 w-5'></img>
        <img src='.\src\assets\social-img\instagram.png' className='h-5 w-5'></img>
        </div>
      </section>
    </div>
  )
}

export default Footer