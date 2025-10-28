import Image from 'next/image';
import React from 'react';

function Cart({ name, img, description, category }) {
  return (
    <div className='relative col-span-3 overflow-hidden group hover:shadow-md'>
      <div className='group-hover:scale-110 transition-all duration-500'>
        <div>
          <Image
            src={img}
            alt={name}
            width={500}
            height={500}
            className='object-cover'
          />
        </div>
        <div className='product-item-overlay'>
          <div className='absolute top-full group-hover:top-[calc(100%-120px)] h-[120px] p-4 bg-white/70 w-full backdrop-blur-xs flex flex-col items-center justify-center transition-all duration-500 text-center'>
            <h3 className='text-base tracking-wide capitalize text-n-500'>
              {name}
            </h3>
            <p className='mt-2 text-sm tracking-wide text-n-700 line-clamp-2'>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
