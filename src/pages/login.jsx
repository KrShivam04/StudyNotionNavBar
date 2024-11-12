import React from 'react'
import Template from '../component/Template'
import loginImg from '../assets/login.png'

const Login = ({setIsLoggedIn}) => {
  return (
    <div>

      <Template 
        title='Welcome back'
        desc1='Build skills for today, today and beyond'
        desc2='Education to future-proof your career'
        image={loginImg}
        formtype='login'
        setIsLoggedIn={setIsLoggedIn}
      />

    </div>
  )
}

export default Login

