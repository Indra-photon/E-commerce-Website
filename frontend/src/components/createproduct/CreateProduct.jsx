import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';

const CreateProduct = () => {

  const {
    handleSubmit,
    register,
    formState : { errors }
  } = useForm();

  const submitHandler = async ({title, price, imgURL}) => {
        const res = await axios.post("http://localhost:2000/products",{
            title,
            price,
            imgURL
        });
        if (res.status === 201) {
            alert ("Product created successfully")
        }
  }

  return (
    <form className='p-10 bg-sky-300 flex justify-center h-screen' onSubmit={handleSubmit(submitHandler)}>
        <div className='m-5'>
            <label htmlFor='title' className='pr-5'>Title</label>
            <input 
                type='text' 
                id='title'
                className='border'
                {...register("title", {required: "Please enter product title"})}
            />
            {errors.title && <div>{errors.title.message}</div>}
        </div>

        <div className='m-5'>
            <label htmlFor='price' className='pr-5'>Price</label>
            <input 
                type='number' 
                id='price'
                className='border'
                {...register("price", {required: "Please enter product price"})}
            />
            {errors.price && <div>{errors.price.message}</div>}
        </div>

        <div className='m-5'>
            <label htmlFor='imgURL' className='pr-5'>imgURL</label>
            <input 
                type='text' 
                id='imgURL'
                className='border'
                {...register("imgURL", {required: "Please enter image URL"})}
            />
            {errors.imgURL && <div>{errors.imgURL.message}</div>}
        </div>

        <div className='mt-12'>
            <button type='submit' className='bg-black text-white p-2 rounded'>
                Create Product
            </button>
        </div>
    </form>
  )
}

export default CreateProduct
