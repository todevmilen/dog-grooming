import React from 'react';

// import image
import DogImg from '../assets/img/dogs/dog-appointment.png';

const Appointment = () => {
  return (
    <section className='bg-yellow-secondary py-12'>
      <div className='container mx-auto'>
        {/* image */}
        <div>
          <img src={DogImg} alt='' />
        </div>
        {/* form */}
        <form>
          <h2>Get an appointment</h2>
        </form>
      </div>
    </section>
  );
};

export default Appointment;
