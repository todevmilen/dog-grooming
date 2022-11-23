import React from "react";

// import image
import DogImg from "../assets/img/dogs/dog-contact.png";

const Contact = () => {
  return (
    <section id="contact" className="bg-yellow-secondary pt-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-around">
          {/* image */}
          <div className="order-1 lg:-order-1 lg:mt-16">
            <img className="-mb-[12px]" src={DogImg} alt="" />
          </div>
          {/* text */}
          <div className="flex flex-col items-center justify-center">
            <div className="text-orange font-semibold mb-3">Информация</div>
            <div className="text-4xl text-blue font-extrabold">
              + 359 897 590 266
            </div>
            <div className="mb-7 text-blue">
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>{" "}
              Пон - Пет: 09:30 - 18:30
            </div>
            <div className="mb-5 text-blue">Ул. Братя Свещарови 5, Пловдив</div>
            <a href="https://www.google.com/maps/place/Golden+pets+-+Grooming+and+SPA/@42.1455599,24.7623249,16.95z/data=!4m13!1m7!3m6!1s0x14acd10afe5af707:0x5bb2d446d0e1451f!2sul.+%22Bratya+Sveshtarovi%22+5,+4017+Kamenitsa+2,+Plovdiv!3b1!8m2!3d42.1455541!4d24.7646017!3m4!1s0x14acd10a6444f0b7:0xcba2d37fef7ffe77!8m2!3d42.1455183!4d24.7645468">
              Виж на картата
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
