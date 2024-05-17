import React from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




const loginexist = async ({email}) => {
  try {
      const existingUser = await axios.get(`http://localhost:2000/user?email=${email}`);
      if (existingUser.data == null){
        return ("not found");
      } else {
        return existingUser.data;
      }
  } catch (error) {
      console.error("Error:", error);
      return {};
  }
}



const Login = () => {

  // const id = 5;
  const navigate = useNavigate();
  function gotoshop (id) {
    navigate ("/cart" , {state : {id : id}})
  }

  const [userStatus, setUser] = useState(false);
  // console.log(userStatus)
  const {
    handleSubmit,
    register,
    formState : { errors }
  } = useForm();

  const submitHandler = async ({ email, password}) => {
    const UserData = await loginexist({email});
    // console.log(UserData)
    if (UserData == "not found"){
      alert ("User not found, Please sign up")
    } else{
      const hashedPass = UserData.password;
        const ans = await axios.post('http://localhost:2000/User', {password, hashedPass})
        // console.log(ans.data)
        if (ans.data) {
          // console.log(ans.data)
          setUser(true)
          gotoshop(email)
        } else {
          alert ("Password does not match")
        }
    }
    
  }


  return (
    <div>
      {userStatus ? <div className='flex flex-col items-center justify-center h-screen bg-gray-100 text-xl'> Logged in </div> : 
        
        <form className='flex flex-col items-center justify-center h-screen bg-gray-100' onSubmit={handleSubmit(submitHandler)}>
        <section className = 'flex justify-center'><h1 className = 'text-xl pb-3'>Don't you have an account? <Link to = "/signup"><span className='border-2 border-green-600 px-2 pb-1 rounded-xl'>Sign up</span></Link> please </h1></section>
          <div className='w-full max-w-md p-6 bg-white shadow-md rounded-md'>
          <h2 className='text-2xl font-semibold mb-6 text-center'>Log In </h2>

        

          <div className='mb-4'>
              <label htmlFor='email' className='block mb-1'>Email</label>
              <input 
                  type='text' 
                  id='email'
                  className='w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
                  {...register("email", {required: "Please enter your email"})}
              />
              {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
          </div>

          <div className='mb-6'>
              <label htmlFor='password' className='block mb-1'>Password</label>
              <input 
                  type='password' 
                  id='password'
                  className='w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
                  {...register("password", {required: "Please enter your password"})}
              />
              {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
          </div>

          <button type='submit' className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600'>
              Login
          </button>
          </div>
          </form>
        }
      
        {/* <form className='flex flex-col items-center justify-center h-screen bg-gray-100' onSubmit={handleSubmit(submitHandler)}>
        <section className = 'flex justify-center'><h1 className = 'text-xl pb-3'>Don't you have an account? <Link to = "/signup"><span className='border-2 border-green-600 px-2 pb-1 rounded-xl'>Sign up</span></Link> please </h1></section>
          <div className='w-full max-w-md p-6 bg-white shadow-md rounded-md'>
          <h2 className='text-2xl font-semibold mb-6 text-center'>Log In </h2>

        

          <div className='mb-4'>
              <label htmlFor='email' className='block mb-1'>Email</label>
              <input 
                  type='text' 
                  id='email'
                  className='w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
                  {...register("email", {required: "Please enter your email"})}
              />
              {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
          </div>

          <div className='mb-6'>
              <label htmlFor='password' className='block mb-1'>Password</label>
              <input 
                  type='password' 
                  id='password'
                  className='w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
                  {...register("password", {required: "Please enter your password"})}
              />
              {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
          </div>

          <button type='submit' className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600'>
              Login
          </button>
          </div>
          </form> */}
      
      
    </div>
  )
}

export default Login
