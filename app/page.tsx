"use client"
import { useSession } from 'next-auth/react'
import Image from 'next/image';
import SignIn from './components/sign-in';
const HomePage = () => {
  const {data:session,status} = useSession(); 
 
 
  return (
  <div className='h-screen w-full flex justify-center items-center flex-col gap-4'>
  {status === "loading" ? "Loading session":   <div >
      {session ? <div className='space-y-3'> 
        <Image src={session?.user?.image as string} height={100} width={100} alt='avatar' className='border p-2 ring-1 border-sky-500 rounded-full'/>
        <h4 className='font-semibold text-sm text-center'>{session?.user?.name}</h4>
      </div>: <SignIn />}
    </div>}
  </div>
  )
}

export default HomePage