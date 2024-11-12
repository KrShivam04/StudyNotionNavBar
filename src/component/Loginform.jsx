import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const Loginform = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();
  const [formdata, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault(); 
    setIsLoggedIn(true)
    toast.success("Logged In")
    navigate('/dashboard')
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col w-full gap-y-4 mt-6'>
      <label htmlFor="emailID" className='w-full'>
        <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>
          Email Address <sup className='text-red-500'>*</sup>
        </p>
     
        <input
          type="email"
          id="emailID"
          required
          value={formdata.email}
          onChange={changeHandler}
          placeholder="Enter email Id"
          name="email"
          className='bg-gray-500 rounded-[0.5rem] text-white w-full p-[12px]'
        />
      </label>
      <label htmlFor="passwordID" className='flex flex-col relative'>
        <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>Password</p>
        <input
          required
          id="passwordID"
          type={showPassword ? 'text' : 'password'}
          value={formdata.password}
          onChange={changeHandler}
          placeholder="Enter password"
          name="password"
          inputMode="text" 
          className='bg-gray-500 rounded-[0.5rem] text-white w-full p-[12px]'
        />


        <span onClick={() => setShowPassword((prev) => !prev)} className='text-white absolute top-1/2 right-2 translate-y-[-50%] cursor-pointer'>
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>

        <Link to="#">
          <p className='text-[0.875rem] text-blue-600 mb-1 leading-[1.375rem] mt-2 max-w-max ml-auto'>Forget Password</p>
        </Link>

      </label>
      

      <button type="submit" className='text-[0.875rem] text-black-700 font-semibold border border-white leading-[1.375rem] rounded-xl pt-2 pb-2 bg-yellow-300'>Sign In</button>
    </form>
  );
};

export default Loginform;


// Done till 50 min in react intermediate class 4