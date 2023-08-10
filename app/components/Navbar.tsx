import React from 'react';

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
          Cikitsa
        </h1>
      </div>
      <div className='flex space-x-10 items-center'>
        <h1 className='cursor-pointer'>Home</h1>
        <h1 className='cursor-pointer'>About</h1>
        <h1 className='cursor-pointer'>Help Improve Predictions</h1>
        <h1 className='cursor-pointer'>Login</h1>
        <h1 className='cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md'>Signup</h1>
      </div>
    </nav>
  );
};

export default Navbar;
