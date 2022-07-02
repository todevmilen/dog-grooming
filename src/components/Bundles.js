import React from 'react';

const Bundle = ({ bundles }) => {
  return (
    <div className='grid grid-cols-3 gap-[30px]'>
      {bundles.map((item, index) => {
        return (
          <div className='w-full max-w-1/3 bg-white shadow-primary' key={index}>
            <div>${item.price}</div>
            <div>{item.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Bundle;
