import React from 'react';

// import logo
import Logo from '../assets/img/logo-white.svg';

const Footer = () => {
  return (
    <footer className='bg-orange py-4'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center text-white'>
          <a href='#'>
            <img src={Logo} alt='' />
          </a>
          <div className='text-[15px]'>
            &copy; Copyright 2022. All rights reserved.
          </div>
          <div className='bg-orange-secondary'>3</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
