import React from 'react'
import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';

const NavBar = (props) => {
  
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1060px] py-4 mx-auto'>
      <Link to='/'>
        <img src={logo} alt='Logo' width={160} height={32} loading='lazy'/>
      </Link>

      <nav>
        <ul className='text-white flex gap-x-6'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li> 
            <Link to='/'>About</Link>
          </li>
          <li>
            <Link to='/'>Contact</Link>
          </li>
        </ul>
      </nav>


      {/* login - signup - logout - dashboard */}

      <div className='flex items-center gap-x-4'>

        { !isLoggedIn &&
          <Link to='/login'>
            <button className='text-white py-[8px] px-[12px] rounded-[8px] border border-white bg-red-500'>Login</button>
          </Link>
        }
        { !isLoggedIn &&
          <Link to='/signup'>
            <button className='text-white py-[8px] px-[12px] rounded-[8px] border border-white bg-red-500'>SignUp</button>
          </Link>
        }
        { isLoggedIn &&
          <Link to='/'>
            <button onClick={ () => {
              setIsLoggedIn(false);
              toast.success("Logged Out")
            }} className='text-white py-[8px] px-[12px] rounded-[8px] border border-white bg-red-500'>
              LogOut
            </button>
          </Link>
        }
        { isLoggedIn &&
          <Link to='/dashboard'>
            <button className='text-white py-[8px] px-[12px] rounded-[8px] border border-white bg-red-500'>Dashboard</button>
          </Link>
        }
      </div>

    </div>
  )
}

export default NavBar
