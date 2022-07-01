import React from 'react';

// import logo
import Logo from '../assets/img/logo.svg';
// import icons
import PhoneIcon from '../assets/img/phone.svg';

const Header = () => {
  return (
    <header className='fixed bg-none w-full right-0 left-0 z-10 py-4'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <a href='#'>
          <img src={Logo} alt='' />
        </a>
        {/* program */}
        <div>
          <div className='flex lg:gap-x-[10px] items-baseline justify-end'>
            <img
              className='w-[28px] h-[28px] lg:w-[34px] lg:h-[34px]'
              src={PhoneIcon}
              alt=''
            />
            <div className='lg:text-[23px] text-blue font-extrabold'>
              + 1 000 10 84 000
            </div>
          </div>
          <div className='text-sm'>
            <div className='hidden lg:flex'>
              Opening Hours: Mon - Sun: 10am - 6pm
            </div>
            <div className='lg:hidden text-right'>Mon - Sun: 10am - 6pm</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
