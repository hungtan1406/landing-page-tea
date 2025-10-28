'use client';
import React from 'react';
import Title from './Title';
import Slider from './Slider';
import { motion } from 'framer-motion';
function BestSellers() {
  return (
    <section id='best-sellers'>
      <div className='container my-20'>
        <div className='flex flex-col items-start '>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <Title
              subTitle='Khách hàng yêu thích'
              mainTitle='Những Sản Phẩm'
              textGradient='Bán Chạy Nhất'
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: false }}
            className='max-w-lg pr-16 mt-2 text-sm text-start md:text-justify lg:text-start text-n-500'
          >
            Khám phá những sản phẩm bán chạy nhất của chúng tôi, nơi chất lượng
            kết hợp hương vị trong mỗi tách trà. Hãy tham gia cùng hàng ngàn
            khách hàng hài lòng đã biến những hỗn hợp này thành sở thích của họ
            và nâng tầm thời gian uống trà của bạn ngay hôm nay!
          </motion.p>
        </div>
        <Slider />
      </div>
    </section>
  );
}

export default BestSellers;
