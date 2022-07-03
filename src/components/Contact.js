import React from 'react';

// import image
import DogImg from '../assets/img/dogs/dog-contact.png';

const Contact = () => {
  return (
    <section className='bg-yellow-secondary pt-6'>
      <div className='container mx-auto'>
        <div className='flex'>
          <div>
            <img className='-mb-[13px]' src={DogImg} alt='' />
          </div>
          <div>2</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
