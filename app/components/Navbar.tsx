import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between p-4 border-b-2 border-gray-200'>
      <div>
        <h1
          className='text-5xl font-black'
          style={{
            letterSpacing: '-3px',
            backgroundImage: 'linear-gradient(180deg, #555, #000)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          <Link href='/'>Cikitsa</Link>
        </h1>
      </div>
      <div className='flex space-x-10 items-center'>
        <Link href='/' className='cursor-pointer'>Home</Link>
        <h1 className='cursor-pointer'>About</h1>
        <Link href='/improve_predictions' className='cursor-pointer'>Help Improve Predictions</Link>
        <h1 className='cursor-pointer'>Login</h1>
        <h1 className='cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md'>Signup</h1>
      </div>
    </nav>
  );
};

export default Navbar;
