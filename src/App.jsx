import { useState } from 'react'
import './App.css'
import Navbar from './component/NavBar'
import Home from './pages/home'
import Login from  './pages/login'
import Signup from './pages/signup'
import Dashboard from './pages/dashboard'
import { Routes, Route } from "react-router-dom"
import PrivateRoute from './component/PrivateRoute'
import { Navigate } from 'react-router-dom'


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className='w-screen h-screen bg-gray-800 flex flex-col overflow-x-hidden'>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/> } />
        <Route path='/dashboard' element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard/>
          </PrivateRoute>
        }/>
      </Routes>

    </div>
  )
}

export default App

