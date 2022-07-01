import React from 'react';

const Nav = () => {
  return (
    <nav className='text-[15px]'>
      <ul className='flex gap-x-10'>
        <li>
          <a className='hover:text-blue transition' href='#'>
            Home
          </a>
        </li>
        <li>
          <a className='hover:text-blue transition' href='#'>
            Prices
          </a>
        </li>
        <li>
          <a className='hover:text-blue transition' href='#'>
            Contact
          </a>
        </li>
        <li>
          <a className='hover:text-blue transition' href='#'>
            Get an appointment
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
