import React from 'react';

function Title({ subTitle, mainTitle, textGradient }) {
  return (
    <div>
      <h2 className='sub-heading'>{subTitle}</h2>
      <h1 className='main-heading'>
        {mainTitle} <span className='text-gradient'>{textGradient}</span>
      </h1>
    </div>
  );
}

export default Title;
