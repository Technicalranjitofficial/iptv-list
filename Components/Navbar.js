import React from 'react'

const Navbar = () => {
  return (
    <div className='text-white flex justify-between'> 
    <h1 className='text-xl font-bold text-cyan-500'>IPTV list</h1>
    <ul className='flex gap-3 '>
      <li className='hover:text-slate-300 cursor-pointer text-slate-400'>Home</li>
      <li className='hover:text-slate-300 cursor-pointer text-slate-400'>About</li>
      <li className='hover:text-slate-300 cursor-pointer text-slate-400'>Privacy Policy</li>
    </ul>
    </div>
  )
}

export default Navbar