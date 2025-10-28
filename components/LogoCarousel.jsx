'use client';
import Image from 'next/image';

export const logos = [
  { src: '/partner-logos/costco.png', alt: 'Costco' },
  { src: '/partner-logos/kroger.png', alt: 'Kroger' },
  { src: '/partner-logos/meijer.png', alt: 'Meijer' },
  { src: '/partner-logos/publix.png', alt: 'Publix' },
  { src: '/partner-logos/safeway.png', alt: 'Safeway' },
  { src: '/partner-logos/target.png', alt: 'Target' },
  { src: '/partner-logos/walmart.png', alt: 'Walmart' },
  { src: '/partner-logos/wegmans.png', alt: 'Wegmans' },
  { src: '/partner-logos/whole-foods.png', alt: 'Whole Foods' },
];

export default function LogoCarousel() {
  return (
    <div className='overflow-hidden relative w-full py-8'>
      {/* track chạy liên tục */}
      <div className='flex animate-scroll gap-5 md:gap-10 '>
        {[...logos, ...logos].map((logo, i) =>
          logo.src ? (
            <div key={i} className='flex-shrink-0'>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={60}
                height={60}
                className='w-auto h-9 lg:h-12'
              />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
