import React from 'react';

// import image
import DogImg from '../assets/img/dogs/dog-contact.png';

const Contact = () => {
  return (
    <section id='contact' className='bg-yellow-secondary pt-6'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-around'>
          {/* image */}
          <div className='order-1 lg:-order-1 lg:mt-16'>
            <img className='-mb-[12px]' src={DogImg} alt='' />
          </div>
          {/* text */}
          <div className='flex flex-col items-center justify-center'>
            <div className='text-orange font-semibold mb-3'>Информация</div>
            <div className='text-4xl text-blue font-extrabold'>
              + 359 897 590 266
            </div>
            <div className='mb-7 text-blue'>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> Пон - Пет: 09:30 - 18:30
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
