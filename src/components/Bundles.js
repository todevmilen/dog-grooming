import React from 'react';

const Bundle = ({ bundles }) => {
  return (
    <div className='flex flex-col lg:flex-row justify-between gap-[30px]'>
      {bundles.map((bundle, index) => {
        console.log(bundle);
        // destructure bundle
        const { name, price, list } = bundle;
        return (
          <div
            className='w-full max-w-1/3 bg-white shadow-primary text-center h-[560px] rounded-[60px] py-12'
            key={index}
          >
            <div className='text-5xl font-semibold text-blue mb-4'>
              ${price}
            </div>
            <div className='capitalize'>{name}</div>
            <div>
              {list.map((item, index) => {
                return <div key={index}>{item}</div>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Bundle;
