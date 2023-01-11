import React from 'react'
import {NavLink } from 'react-router-dom'


function Navbar() {
  return (
    <nav className='bg-red-500 px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 left-0 border-b border-gray-200 dark:border-gray-600'>
      <div className='container flex flex-wrap items-center justify-between mx-auto'>
        <NavLink className='' as={NavLink} to='/' >
          <img className='h-6 mr-3 sm:h-9' src="/Marvel_Logo.svg.png" alt="logo marvel" />
        </NavLink>
        <NavLink className='' as={NavLink} to='characters'>
          Characters
        </NavLink>
        <NavLink className='' as={NavLink} to='characters'>
          Comics
        </NavLink>
        <NavLink className='' as={NavLink} to='characters'>
          Comics2
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar