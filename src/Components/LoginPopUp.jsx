import React from 'react';
import { useState } from 'react';
import axios from "axios";

const LoginPopUp = ({ setLogin }) => {
    const [currentState, setCurrentState] = useState('Sign In');
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }

    let newUrl = 'http://localhost:5000/api/user'
    const handleSubmit = async (e) => {
        e.preventDefault();

        // console.log(data);
        if (currentState === 'Sign In') {
            newUrl += '/register';
        }
        else {
            newUrl += '/login';
        }
        const response = await axios.post(newUrl, data);
        // console.log(response);
        if (response.data.success) {
            setLogin(false)
            localStorage.setItem('token', response.data.token);
        }
    }

    const handleClose = () => {
        setLogin(false)
    }
    return (
        <div className='z-50 fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center' onSubmit={handleSubmit}>
            <form className='bg-white p-10 w-96 rounded-lg'>
                <div className='flex justify-between'>
                    <h2 className='font-semibold text-center text-lg mb-2'>{currentState}</h2>
                    <p className='font-light text-xs text-neutral-400 cursor-pointer' onClick={handleClose}>Close</p>
                </div>
                {currentState === 'Sign In' && <div className='flex flex-col gap-1'>
                    <h2 className='font-medium'>Name</h2>
                    <input type="text" name="name" value={data.name} onChange={handleChange} placeholder='Enter your Name' className='p-2 border-2 border-slate-200 rounded-md w-full ' />
                </div>}
                <div className='flex flex-col gap-1 mt-2'>
                    <h2 className='font-medium'>Email</h2>
                    <input type="email" name="email" value={data.email} onChange={handleChange} placeholder='Enter your email' className='p-2 border-2 border-slate-200 rounded-md w-full ' />
                </div>
                <div className='flex flex-col gap-1 mt-2'>
                    <h2 className='font-medium'>Password</h2>
                    <input type="password" name='password' value={data.password} onChange={handleChange} placeholder='Enter your password' className='p-2 border-2 border-slate-200 rounded-md w-full ' />
                </div>
                <button className='w-full p-2 bg-green-800 text-white mt-5 rounded-md'>Login</button>
                <div className='mt-5'>
                    {currentState === 'Sign In' && <p className='font-light text-sm'>Already have an account? <span className='text-blue-500 cursor-pointer' onClick={() => setCurrentState('Login')} >Login</span></p>}
                    {currentState === 'Login' && <p className='font-light text-sm'>Don't have an account? <span className='text-blue-500 cursor-pointer' onClick={() => setCurrentState('Sign In')}>Sign In</span></p>}
                </div>
            </form>
        </div>
    )
}

export default LoginPopUp;