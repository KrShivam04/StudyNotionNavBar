import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Signupform = ({ setIsLoggedIn }) => {
  const [formdata, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [acctype, setacctype] = useState("student");

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault(); 
    if (formdata.password!=formdata.confirmPassword) {
        toast.error("Password Does not match ")
    }
    else {
        setIsLoggedIn(true); 
        toast.success("Account created")
        navigate('/dashboard')
    }

    console.log(formdata);
    
  }

  return (
    <div>
      {/* Student/Instructor tabs */}
      <div className='flex bg-gray-500 p-1 gap-x-1 my-6 rounded-full max-w-max '>
        <button className={`${acctype=== 'student' ? "bg-slate-950 text-neutral-50 rounded-full py-2 px-5 rounded-full transition-all duration-200" : "bg-transparent text-neutral-800 py-2 px-5 rounded-full transition-all duration-200" }`} onClick={() => setacctype('student')}>
          Student
        </button>
        <button className={`${acctype=== 'instructor' ? "bg-slate-950 text-neutral-50 py-2 px-5 rounded-full transition-all duration-200" : "bg-transparent text-neutral-800 py-2 px-5 rounded-full transition-all duration-200" }`} onClick={() => setacctype('instructor')}>
          Instructor
        </button>
      </div>




      <form onSubmit={handleSubmit}>
        {/* First and Last Name fields */}
        <div className='flex gap-x-4 w-full'>
          <label className='relative'>
            <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>
              First Name<sup className='text-red-500'>*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter first name"
              value={formdata.firstName}
              className='bg-gray-500 rounded-[0.5rem] text-white w-full p-[12px] pr-10'
            />
          </label>

          <label className='relative'>
            <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>
              Last Name<sup className='text-red-500'>*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter last name"
              value={formdata.lastName}
              className='bg-gray-500 rounded-[0.5rem] text-white w-full p-[12px]'
            />
          </label>
        </div>

        {/* Email field */}
        <label className='relative'>
          <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>
            Email Address<sup className='text-red-500'>*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter email"
            value={formdata.email}
            className='bg-gray-500 rounded-[0.5rem] text-white w-full p-[12px]'
          />
        </label>

        {/* Password and Confirm Password fields */}
        <div className='flex gap-x-4'>
        <label className='relative w-full'>
          <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>
            Create Password<sup className='text-red-500'>*</sup>
          </p>
          <div className='relative'>
            <input
              required
              type={showPassword ? 'text' : 'password'}
              name="password"
              onChange={changeHandler}
              placeholder="Enter password"
              value={formdata.password}
              className='bg-gray-500 rounded-[0.5rem] text-white w-full p-[12px] pr-10' // Add padding to the right
            />
            {/* Eye icon for toggling password visibility */}
            <span
              className='absolute inset-y-0 right-3 flex items-center cursor-pointer'
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
        </label>



        <label className='relative w-full'>
          <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem]'>
            Confirm Password<sup className='text-red-500'>*</sup>
          </p>
          <div className='relative'>
            <input
              required
              type={showPassword1 ? 'text' : 'password'}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm password"
              value={formdata.confirmPassword}
              className='bg-gray-500 rounded-[0.5rem] text-white w-full p-[12px] pr-10' 
            />
            <span
              className='absolute inset-y-0 right-3 flex items-center cursor-pointer'
              onClick={() => setShowPassword1((prev) => !prev)}
            >
              {showPassword1 ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
        </label>


        </div>

        <button type="submit" className='w-full flex justify-center items-center rounded-[8px] font-medium text-black-500 border border-white pt-2 pb-2 gap-2 mt-5 bg-yellow-300'>Create Account</button>
      </form>
    </div>
  );
};

export default Signupform;
