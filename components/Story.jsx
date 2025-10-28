'use client';
import React from 'react';
import { motion } from 'framer-motion';
function Story() {
  return (
    <section id='story'>
      <div className='flex justify-end h-screen max-h-[1100px] p-0 w-full max-w-none bg-[url(/aboutUsImg.jpg)] bg-no-repeat bg-cover bg-center'>
        <div className='w-full h-full lg:w-2/3 bg-p-950/60 p-9'>
          <div className='relative container flex items-center justify-center h-full md:justify-end 2xl:justify-center'>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: false, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: 'easeOut' },
                },
              }}
              className='absolute hidden -translate-y-1/2 translate-x-36 top-1/2 right-1/2 md:block 2xl:translate-x-0'
            >
              <h1 className='uppercase -rotate-90 text-[160px] text-center leading-[148px] font-bold text-p-50 opacity-20'>
                TEA <br /> STATION
              </h1>
            </motion.div>
            <div className='relative'>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: false }}
                className='mb-9'
              >
                <h2 className='!text-p-200 sub-heading'>Khám phá</h2>
                <h1 className='text-white main-heading'>
                  Câu chuyện & sứ mệnh
                </h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: false }}
                className='text-n-200 max-w-80'
              >
                Tại Tea Station, chúng tôi tận tâm tạo ra những loại trà đặc
                biệt tôn vinh hương vị và sức khỏe. Có nguồn gốc từ những thành
                phần tốt nhất, các hỗn hợp của chúng tôi được chế tác bằng sự
                chăm chút và đam mê, đảm bảo mỗi tách trà đều mang đến trải
                nghiệm thú vị. <br /> Cam kết về tính bền vững và hỗ trợ cộng
                đồng địa phương, chúng tôi mong muốn mang đến cho bạn không chỉ
                là trà, mà còn là sự kết nối với thiên nhiên và truyền thống
                trong từng ngụm trà. Hãy cùng chúng tôi thưởng thức hành trình
                của trà.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
