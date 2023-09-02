import React from 'react';
import logo from '../assets/logo.svg';

const Hero = () => {
  return (
    <header className='w-full flex center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        {/* img */}
        <img src={logo} alt="sumz_logo" className='w-28 object-contain'/>

        {/* button */}
        <button type='button' onClick={() => window.open('https://github.com/aaryaparadkar')} className='black_btn'>Github</button>
      </nav>
    </header>
  )
}

export default Hero