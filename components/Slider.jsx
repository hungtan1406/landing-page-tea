'use client';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useMotionValueEvent,
  animate,
} from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const products = [
  {
    name: 'Peppermint Velvet',
    desc: 'Mỗi ngụm mang đến sự pha trộn hài hòa giữa hương vị đậm đà và hương thơm sảng khoái, khiến đây trở thành lựa chọn lý tưởng cho cả nghi lễ buổi sáng và giờ nghỉ giải lao buổi chiều. Trải nghiệm sự ấm áp dễ chịu và những phẩm chất tràn đầy năng lượng đã khiến trà đen trở thành thức uống cổ điển được yêu thích trong nhiều thế kỷ.',
    img: '/products/matcha1.jpg',
    benefits: [
      { label: 'Giúp ngủ ngon và thư giãn', percent: 92 },
      { label: 'Tăng sức đề kháng tự nhiên', percent: 85 },
      { label: 'Cải thiện tiêu hóa', percent: 78 },
      { label: 'Chống lão hóa tế bào', percent: 88 },
    ],
  },
  {
    name: 'Chamomile Bliss',
    desc: 'Mỗi ngụm mang đến sự pha trộn hài hòa giữa hương vị đậm đà và hương thơm sảng khoái, khiến đây trở thành lựa chọn lý tưởng cho cả nghi lễ buổi sáng và giờ nghỉ giải lao buổi chiều. Trải nghiệm sự ấm áp dễ chịu và những phẩm chất tràn đầy năng lượng đã khiến trà đen trở thành thức uống cổ điển được yêu thích trong nhiều thế kỷ.',
    img: '/products/blacktea1.jpg',
    benefits: [
      { label: 'Thư giãn tinh thần', percent: 90 },
      { label: 'Giúp ngủ sâu hơn', percent: 87 },
      { label: 'Giảm căng thẳng', percent: 83 },
      { label: 'Cải thiện tiêu hóa', percent: 80 },
    ],
  },
  {
    name: 'Mystic Earl Grey',
    desc: 'Mỗi ngụm mang đến sự pha trộn hài hòa giữa hương vị đậm đà và hương thơm sảng khoái, khiến đây trở thành lựa chọn lý tưởng cho cả nghi lễ buổi sáng và giờ nghỉ giải lao buổi chiều. Trải nghiệm sự ấm áp dễ chịu và những phẩm chất tràn đầy năng lượng đã khiến trà đen trở thành thức uống cổ điển được yêu thích trong nhiều thế kỷ.',
    img: '/products/oolong1.jpg',
    benefits: [
      { label: 'Tăng tập trung', percent: 88 },
      { label: 'Giảm mệt mỏi', percent: 86 },
      { label: 'Hỗ trợ tiêu hóa', percent: 81 },
      { label: 'Chống oxy hóa', percent: 89 },
    ],
  },
  {
    name: 'Lemon Ginger Zest',
    desc: 'Mỗi ngụm mang đến sự pha trộn hài hòa giữa hương vị đậm đà và hương thơm sảng khoái, khiến đây trở thành lựa chọn lý tưởng cho cả nghi lễ buổi sáng và giờ nghỉ giải lao buổi chiều. Trải nghiệm sự ấm áp dễ chịu và những phẩm chất tràn đầy năng lượng đã khiến trà đen trở thành thức uống cổ điển được yêu thích trong nhiều thế kỷ.',
    img: '/products/whitetea1.jpg',
    benefits: [
      { label: 'Tăng đề kháng', percent: 91 },
      { label: 'Làm ấm cơ thể', percent: 88 },
      { label: 'Thải độc tự nhiên', percent: 84 },
      { label: 'Giảm cảm cúm', percent: 90 },
    ],
  },
];

function AnimatedCounter({ value, duration }) {
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, {
      duration,
      ease: 'easeInOut',
    });
    return controls.stop;
  }, [value, duration]);

  useMotionValueEvent(count, 'change', (latest) => {
    setDisplayValue(Math.floor(latest));
  });

  return <>{displayValue}</>;
}

export default function Slider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto slide mỗi 6 giây
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % products.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const product = products[index];

  return (
    <div className='relative overflow-hidden w-full lg:px-4 md:px-2 mt-10'>
      {/* Slide chuyển động */}
      <div className='overflow-hidden'>
        <AnimatePresence mode='wait' custom={direction}>
          <motion.div
            key={product.name}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className='flex flex-col lg:flex-row items-center justify-between gap-6 mb-10'
          >
            {/* Left content */}
            <div className='p-4 lg:pl-0 lg:pr-8 w-full'>
              <div className='mt-4 md:mt-10'>
                <h3 className='text-lg md:text-2xl font-semibold text-green-800 mb-3'>
                  {product.name}
                </h3>
                <p className='max-w-lg mt-4 text-gray-700'>{product.desc}</p>
              </div>

              {/* Benefits */}
              <div className='grid grid-cols-2 gap-x-10 gap-y-6 mt-6 w-full'>
                {product.benefits.map((b, i) => (
                  <div
                    key={i}
                    className='p-3 rounded-xl bg-white hover:bg-green-50 transition'
                  >
                    <h4 className='text-sm font-semibold mb-3 text-gray-900'>
                      {b.label}
                    </h4>
                    <div className='relative w-full h-2 bg-gray-200 rounded-full overflow-visible'>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${b.percent}%` }}
                        transition={{ duration: 2, ease: 'easeInOut' }}
                        className='h-full rounded-full bg-gradient-to-r from-green-400 via-emerald-500 to-green-700 relative'
                      >
                        {/* Bong bóng ở cuối thanh */}
                        <motion.div
                          className='absolute -top-8 right-0 flex items-center justify-center text-xs font-semibold text-gray-800 bg-gray-100 px-2 py-1 rounded-md shadow-md border border-gray-300'
                          style={{ transform: 'translateX(50%)' }}
                        >
                          <AnimatedCounter value={b.percent} duration={2} />%
                          <div className='absolute left-1/2 -bottom-[4px] -translate-x-1/2 w-2 h-2 bg-gray-100 rotate-45 border-l border-b border-gray-300'></div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right image */}
            <div className='flex-1 flex justify-center'>
              <Image
                src={product.img}
                alt={product.name}
                width={500}
                height={500}
                className='max-w-[600px] h-[250px] md:h-[70vh] max-h-[700px] rounded-md lg:rounded-tl-[80px] lg:rounded-bl-[80px] object-cover shadow-lg'
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots navigation */}
      <div className='flex justify-center gap-3 mt-4'>
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? 'bg-green-600 w-6' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
