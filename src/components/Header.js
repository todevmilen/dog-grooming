import React from 'react';

// import logo
import Logo from '../assets/img/logo.svg';

const Header = () => {
  return (
    <header className='fixed bg-none w-full right-0 left-0 z-10 py-4'>
      <div className='container mx-auto'>
        <img src={Logo} alt='' />
      </div>
    </header>
  );
};

export default Header;
