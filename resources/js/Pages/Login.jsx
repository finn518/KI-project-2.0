import React from 'react'
import person from '../assets/person.png'
import lock from '../assets/lock.png'



const Login = () => {
  return (
    <div className='flex flex-col gap-8 items-center justify-center h-screen'>
        <h2 className='underline underline-offset-[20px] text-4xl font-bold mb-2'>Sign In</h2>
        <p className='text-slate-600'>Welcome to website! Please sign in first</p>

        <div className='relative flex flex-row items-center border-b-2 mt-10'>
            <input type="email" placeholder='Email' className='pl-10 pr-3 py-2 w-96 focus:outline-none border-none bg-transparent'/>
            <img src={person} alt="person" className='size-6 absolute ml-2'/>
        </div>

        <div className='relative flex flex-row items-center border-b-2'>
            <input type="password" placeholder='Password' className='pl-10 pr-3 py-2 w-96 focus:outline-none border-none'/>
            <img src={lock} alt="lock" className='size-6 absolute ml-2'/>
        </div>
        <p>Don't have an account? <a href="#" className='font-bold'>Register Now</a></p>
        <form action="admin" method='POST'>
        <button type="submit" className='bg-slate-500 font-semibold w-52 h-12 rounded-md text-white'>Sign In</button>
        </form>
    </div>
  )
}

export default Login