'use client';
import React, { Fragment } from 'react';
import FeatureCard from './FeatureCard';
import { motion } from 'framer-motion';
const FeatureDetails = [
  {
    title: 'Nguồn cung cao cấp',
    description:
      'Chúng tôi tự hào sản xuất trà ngay tại Hoa Kỳ, sử dụng nguyên liệu chất lượng cao từ các trang trại địa phương.',
    image: '/benefit_1.jpg',
  },
  {
    title: 'Hương vị và pha chế độc đáo',
    description:
      'Sản phẩm độc quyền của chúng tôi gồm các loại trà được với hương vị độc đáo, được chế tác để làm hài lòng mọi khẩu vị.',
    image: '/benefit_2.jpg',
  },
  {
    title: 'Tập trung vào sức khỏe',
    description:
      'Hãy thưởng thức các loại trà tốt cho sức khỏe của chúng tôi, được pha chế cẩn thận để hỗ trợ trí óc, cơ thể và tâm hồn của bạn.',
    image: '/benefit_3.jpg',
  },
  {
    title: 'Trải Nghiệm Cá Nhân Hoá',
    description:
      'Trải nghiệm dịch vụ được cá nhân hóa với mọi đơn hàng, phù hợp với sở thích và nhu cầu trà riêng của bạn.',
    image: '/benefit_4.jpg',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
  transition: {
    staggerChildren: 0.3,
    delayChildren: 0.2,
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

function Features() {
  return (
    <section id='features'>
      <div className='container relative m-20 text-center'>
        {/* first line */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false, amount: 0.2 }}
          className='flex flex-col items-center justify-center w-full gap-0 lg:gap-10 lg:flex-row'
        >
          {FeatureDetails.slice(0, 2).map((feature, index) => (
            <Fragment key={index}>
              {index === 1 && (
                <motion.div
                  variants={itemVariants}
                  className='order-1 lg:order-2 bg-p-50 feature-card lg:bg-transparent'
                >
                  <div>
                    <h2 className='sub-heading'>why us</h2>
                    <h1 className='main-heading leading-loose text-center'>
                      Sự <span className='text-gradient'>độc đáo</span> từ{' '}
                      <br /> tea station
                    </h1>
                  </div>
                </motion.div>
              )}
              <motion.div
                variants={itemVariants}
                className={`
                  ${index === 0 ? 'order-2 lg:order-1' : ''}
                  ${index === 1 ? 'order-3 lg:order-3' : ''}
                `}
              >
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  img={feature.image}
                />
              </motion.div>
            </Fragment>
          ))}
        </motion.div>

        {/* second line */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 1.2 }}
          className='flex flex-col items-center justify-center w-full lg:-mt-20 lg:gap-10 lg:flex-row'
        >
          {FeatureDetails.slice(2, 4).map((feature, index) => (
            <motion.div variants={itemVariants} key={index}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                img={feature.image}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Features;
