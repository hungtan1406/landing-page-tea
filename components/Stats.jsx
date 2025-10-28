'use client';
import { motion, useMotionValue, animate } from 'framer-motion';
import { useEffect, useState } from 'react';

const statsItems = [
  { label: 'hương vị pha chế', counter: '100+' },
  { label: 'sản phẩm bán ra toàn thế giới', counter: '500k+' },
  { label: 'điểm đánh giá từ khách hàng', counter: '4.9+' },
];

export default function Stats() {
  return (
    <section
      id='stats'
      className='relative mt-20 bg-fixed bg-center bg-no-repeat bg-cover bg-[url(/statsBg.jpg)]'
    >
      <div className='absolute inset-0 bg-p-950/95'></div>
      <div className='container relative z-10 flex flex-col md:flex-row items-center justify-center px-4 py-20 lg:py-28 gap-14 lg:gap-32'>
        {statsItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            viewport={{ once: false, amount: 0.3 }} // 👈 chỉ chạy khi cuộn đến
            className='stats-item relative text-center px-6 md:px-10'
          >
            <AnimatedCounter target={item.counter} />
            <h2 className='text-white/50 text-xs lg:text-base capitalize mt-2'>
              {item.label}
            </h2>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function AnimatedCounter({ target }) {
  const numPart = parseFloat(target);
  const textPart = target.replace(/[0-9.\s]/g, '');
  const count = useMotionValue(0);
  const [display, setDisplay] = useState('0');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;

    const controls = animate(count, numPart, {
      duration: 2,
      ease: 'easeOut',
    });

    const unsubscribe = count.on('change', (v) => {
      const formatted = numPart < 10 ? v.toFixed(1) : Math.floor(v).toString();
      setDisplay(formatted);
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [numPart, started]);

  return (
    <motion.h1
      className='counter text-6xl font-lobster text-center tracking-wider lg:text-8xl font-bold text-transparent bg-clip-text bg-[linear-gradient(24deg,rgba(255,255,255,1)_40%,rgba(121,220,180,1)_100%)]'
      onViewportEnter={() => setStarted(true)}
      viewport={{ once: false }}
    >
      {display}
      {textPart}
    </motion.h1>
  );
}
