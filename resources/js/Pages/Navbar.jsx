import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ content }) => {
  return (
    <nav className='bg-blue-200 h-20 flex items-center justify-around sticky top-0 z-50'>
      <p className='text-[28px] font-bold'>RESTORAN</p>
      {content.map((item, index) => (
        <button
          key={index}
          className='bg-blue-500 p-3 rounded-md w-44 text-white text-[20px]'
        >
          {item}
        </button>
      ))}
      <button className='bg-red-500 p-3 rounded-md w-24 text-white text-[20px]'>LogOut</button>
    </nav>
  );
};

Navbar.propTypes = {
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Navbar;
