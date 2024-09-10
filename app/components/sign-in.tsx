"use client"
import React from 'react'
import { gitSvg } from './constants/svgs'
import { signIn } from 'next-auth/react'
const SignIn = () => {
    const handleLogin = async()=>{
      await signIn("github",{
         callbackUrl: "http://localhost:3000",
         redirect: true
      })
    }
  return (
    <div className='px-4 py-3 cursor-pointer rounded-md flex items-center border' role='button' onClick={handleLogin}>
        {gitSvg} <h4 className='font-semibold'>Sign in with Github</h4>
    </div>
  )
}

export default SignIn