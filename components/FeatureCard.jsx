import React from 'react';

function FeatureCard({ title, description, img }) {
  return (
    <div
      className='feature-card group relative'
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className='absolute inset-0 transition-all duration-500 opacity-50 bg-p-900 group-hover:opacity-80 -z-10'></div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default FeatureCard;
