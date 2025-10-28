'use client';
import React from 'react';
import Title from './Title';
import LogoCarousel from './LogoCarousel';
import { motion } from 'framer-motion';
function PartnerLogos() {
  return (
    <section id='partner-logo' className='mt-10'>
      <div className='container'>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <Title
            subTitle='có mặt tại'
            mainTitle='những nhà phân phối'
            textGradient='uy tín'
          />
        </motion.div>

        <div className='flex mt-9 md:mt-16 [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
          <LogoCarousel />
        </div>
      </div>
    </section>
  );
}

export default PartnerLogos;
