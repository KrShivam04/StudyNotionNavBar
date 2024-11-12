import React from 'react'
import frame from '../assets/frame.png'
import Signupform from './Signupform'
import Loginform from './Loginform'
import { FcGoogle } from "react-icons/fc";

const Template = ({title , desc1, desc2 , image, formtype, setIsLoggedIn}) => {
  return (
    <div className='flex w-11/12 max-w-[1090px] py-12 mx-auto gap-x-6 gap-y-0 justify-between'>

      <div className='w-11/12 max-w-[450px] mx-0'>

        <h1 className='text-white font-semibold text-[1.875rem] leading-[2.735rem]'>{title}</h1>

        <p className='text-[1.125rem] leading-[1.625rem] mt-4 text-white'>
            <span className='text-white'>{desc1}</span>
            <br />
            <span className='text-blue-500'>{desc2}</span>
        </p>

        {formtype === "signup" ? 
        (<Signupform setIsLoggedIn={setIsLoggedIn}/>):
        (<Loginform setIsLoggedIn={setIsLoggedIn}/>)}

        <div className='flex w-full items-center my-4 gap-x-2'>
            <div className='w-full h-[1px] bg-white'></div>
            <div className='text-white font-medium leading-[1.375rem]'>or</div>
            <div className='w-full h-[1px] bg-white'></div>
        </div>

        <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-white border border-white pt-2 pb-2 gap-2'>
            <span><FcGoogle /></span>
            <span>Sign Up with Google</span>
        </button>

      </div>

      <div className='relative w-11/12 max-w-[450px]'>
        <img src={frame} alt="pattern" width={558} height={504} loading='lazy' />
        <img src={image} alt="pattern" width={558} height={490} loading='lazy' className='absolute  -top-4 right-4' />
      </div>

    </div>
  )
}

export default Template
