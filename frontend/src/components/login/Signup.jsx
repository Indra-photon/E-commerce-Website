import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';


// const saltRounds = 10;

const userexist = async (email) => {
    try {
        const existingUser = await axios.get(`http://localhost:2000/user?email=${email}`);
        return existingUser.data; // Return the data from the response
    } catch (error) {
        console.error("Error:", error);
        return null; // Return null if an error occurs
    }
}


const Signup = () => {
   

    const {
        handleSubmit,
        register,
        formState : { errors }
      } = useForm();
    
      const submitHandler = async ({email, password}) => {

            const existingUserData = await userexist(email);
            //console.log(existingUserData)
            if (existingUserData) {
                alert("User with this email already exists");
                return; // Stop further execution
            }


            
            const res = await axios.post("http://localhost:2000/users",{
                email,
                password
            });

            if (res.status === 201) {
                alert ("You have signed up successfully")
                
            }
      }
    return (
        <div>
        <form className='flex flex-col items-center justify-center h-screen bg-gray-100' onSubmit={handleSubmit(submitHandler)}>
        <div className='w-full max-w-md p-6 bg-white shadow-md rounded-md'>
            <h2 className='text-2xl font-semibold mb-6 text-center'>Sign Up</h2>

        

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
                Sign Up
            </button>
        </div>
        </form>

        
        </div>
    )
}

export default Signup
