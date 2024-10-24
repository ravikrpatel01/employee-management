import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Header = ({data}) => {
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', "");
    window.location.reload();
  }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-lg font-semibold'>Hello <br /><span className='text-2xl font-bold'>{data.fullName}👋</span></h1>
      <button onClick={logOutUser} className='bg-red-500 px-5 py-2 rounded-sm text-white font-semibold'>Log Out</button>
    </div>
  )
}

export default Header
