'use client';
import Image from 'next/image';
import React from 'react';
import hero_img from '../public/hero_img.png';
import Link from 'next/link';
import { motion } from 'framer-motion';
function Hero() {
  return (
    <section className='h-screen max-h-[1100px] bg-gradient-to-t from-p-100 to-white overflow-clip'>
      <div className='container relative flex items-center justify-center xl:justify-start w-full h-full'>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false }}
          className='absolute bottom-0 right-0 overflow-hidden z-0 md:-bottom-40 xl:top-1/2 xl:-translate-y-1/2'
        >
          <Image
            src={hero_img}
            alt='Hero Image'
            className='h-full 2xl:[mask-image:linear-gradient(to_left,transparent,black_10%)]'
          />
        </motion.div>
        <div className='flex flex-col items-center justify-center gap-4 z-10 md:gap-9 xl:items-start '>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <h2 className='mb-2 text-sm md:text-xl font-semibold leading-none tracking-wider uppercase text-center xl:text-start font-inter'>
              hơn <span className='text-gradient'>một trăm</span> hương vị trà
            </h2>
            <h1 className='text-5xl md:text-6xl xl:text-7xl leading-none tracking-wider text-center font-lobster capitalize text-p-950'>
              Trà Đặc Biệt Chế Tác
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false }}
            className='max-w-xl px-4 md:px-0 text-center xl:text-start text-n-700'
          >
            Sứ mệnh của chúng tôi là mang đến cho bạn sự yên bình và kết nối
            thông qua các hương vị trà được chọn lọc cẩn thận và được tạo ra để
            nâng cao trải nghiệm hàng ngày và sức khoẻ toàn diện cho bạn.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false }}
            className='btn'
          >
            <Link href={'#product'} className='flex items-center'>
              Tìm hiểu sản phẩm
              <Image
                src='/right-arrow.svg'
                alt='arrow'
                width={16}
                height={16}
                className='ml-2'
              />
            </Link>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
export default Hero;
