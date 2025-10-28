'use client';
import { House, Mail, Phone } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';
const contactInfo = [
  {
    icon: <House size={20} />,
    text: 'Địa chỉ',
    info: '123 Đường Trà, Thành phố Trà, Quốc gia Trà',
  },
  {
    icon: <Mail size={20} />,
    text: 'Email',
    info: 'contact@teastation.com',
  },
  {
    icon: <Phone size={20} />,
    text: 'Điện thoại',
    info: '(123) 456-7890',
  },
];

function Contact() {
  return (
    <section id='contact'>
      <div className='container my-20'>
        <div className='flex flex-col lg:flex-row w-full gap-10'>
          {/* Contact Information */}
          <div className='flex flex-col h-[515px] items-center justify-center flex-1 w-full px-10 py-20 border border-p-600  gap-9'>
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: -70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false }}
            >
              <h2 className='sub-heading'>Có câu hỏi?</h2>
              <p className='main-heading'>Liên hệ tea station tại</p>
            </motion.div>

            {/* Contact Information Details */}
            <div className='w-full'>
              {contactInfo.map((info, index) => (
                <div key={index}>
                  <div className='flex items-center gap-2 px-2 py-2 bg-p-700'>
                    <span className='text-white'>{info.icon}</span>
                    <h1 className='text-white capitalize'>{info.text}</h1>
                  </div>
                  <p className='mt-2 text-base'>{info.info}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className='relative text-center flex flex-col h-[515px] items-center justify-center flex-1 w-full px-10 py-20 border border-p-600 gap-9 overflow-clip'>
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: -70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false }}
            >
              <h2 className='sub-heading'>Cập nhật bản tin</h2>
              <div className='main-heading'>Đăng ký theo giỏi</div>
            </motion.div>
            <p>Đăng ký nhận bản tin của chúng tôi và cập nhật thông tin.</p>
            {/* Email Input */}
            <div className='relative w-[250px] md:w-[350px]'>
              <input
                type='email'
                placeholder='Nhập địa chỉ email của bạn'
                className='w-full px-12 py-3 border border-p-600 focus:outline-p-600'
              />
              <Mail
                size={20}
                className='absolute -translate-y-1/2 top-1/2 left-5 text-p-600'
              />
            </div>
            {/* Button */}
            <button className='flex-none !border-p-600 w-[250px] md:w-[350px]'>
              <div className='capitalize btn !bg-p-600 hover:!bg-p-700'>
                <span className='w-full text-center font-inter'>
                  Đồng ý theo dõi
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
