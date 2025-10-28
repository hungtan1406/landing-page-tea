'use client';
import React from 'react';
import { motion } from 'framer-motion';
function Slogan() {
  return (
    <section className='mt-20 overflow-clip'>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false }}
        className='relative min-w-full h-[30vh] max-h-[276px] overflow-hidden flex justify-center items-center'
      >
        <video
          poster='/aboutUs.png'
          autoPlay
          loop
          muted
          className='absolute inset-0 min-w-full min-h-full -z-10 md:top-[-20%] md:left-[-50%] md:translate-x-1/2'
        >
          <source src='/video.mp4' type='video/mp4' />
        </video>
        <p className='px-4 text-base tracking-wide text-center text-white z-10 md:text-2xl text-shadow-[2px_2px_8px_#000000]'>
          Chỉ những lá trà ngon nhất mới được đưa vào sản phẩm của chúng tôi,
          <br className='hidden lg:block' />
          đảm bảo mỗi ngụm trà đều mang hương vị tinh khiết và tuyệt hảo.
        </p>
      </motion.div>
    </section>
  );
}

export default Slogan;
