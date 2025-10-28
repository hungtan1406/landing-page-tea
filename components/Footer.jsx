'use client';
import { Facebook, Instagram, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
  // Cấu hình hiệu ứng fade-in từ dưới lên
  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: 'easeOut' },
    },
  });

  return (
    <footer className='bg-p-950 text-white/70 overflow-hidden'>
      <motion.div
        className='max-w-[1530px] mx-auto px-6 md:px-[72px] py-12 grid grid-cols-1 md:grid-cols-4 gap-10'
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          variants={fadeUp(0.1)}
          className='flex flex-col items-center md:items-start space-y-4'
        >
          <div className='flex items-center space-x-3'>
            <Image
              src='/logo.png'
              alt='Tea Station Logo'
              width={50}
              height={50}
            />
            <span className='text-2xl font-lobster text-white'>
              Tea Station
            </span>
          </div>
          <p className='text-sm text-white/60 max-w-xs text-center md:text-left'>
            Thưởng thức từng ngụm trà – nơi hương vị và sự thư giãn hòa quyện,
            mang đến bình yên mỗi ngày.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp(0.2)}
          className='flex flex-col items-center md:items-start'
        >
          <h4 className='text-lg font-semibold text-white mb-4'>
            Liên Kết Nhanh
          </h4>
          <ul className='space-y-2 text-center'>
            <li>
              <Link
                href='/products'
                className='hover:text-p-400 transition-colors'
              >
                Sản Phẩm
              </Link>
            </li>
            <li>
              <Link
                href='/#story'
                className='hover:text-p-400 transition-colors'
              >
                Giới Thiệu
              </Link>
            </li>
            <li>
              <Link
                href='/#contact'
                className='hover:text-p-400 transition-colors'
              >
                Liên Hệ
              </Link>
            </li>
          </ul>
        </motion.div>

        <motion.div
          variants={fadeUp(0.3)}
          className='flex flex-col items-center md:items-start space-y-4'
        >
          <h4 className='text-lg font-semibold text-white'>
            Theo Dõi Chúng Tôi
          </h4>
          <div className='flex space-x-5'>
            <a
              href='#'
              className='hover:text-p-400 transition-colors'
              aria-label='Facebook'
            >
              <Facebook size={22} />
            </a>
            <a
              href='#'
              className='hover:text-p-400 transition-colors'
              aria-label='Instagram'
            >
              <Instagram size={22} />
            </a>
            <a
              href='#'
              className='hover:text-p-400 transition-colors'
              aria-label='Email'
            >
              <Mail size={22} />
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp(0.4)}
          className='flex flex-col items-center md:items-start'
        >
          <h4 className='text-lg font-semibold text-white mb-3 text-center md:text-left'>
            Đăng Ký Nhận Tin
          </h4>
          <p className='text-white/60 mb-4 text-center md:text-left text-sm'>
            Nhận thông tin khuyến mãi và sản phẩm mới từ Tea Station.
          </p>
          <form className='flex flex-col sm:flex-row md:flex-col gap-3 w-full max-w-[300px]'>
            <div className='relative w-full'>
              <Mail
                className='absolute left-3 top-1/2 -translate-y-1/2 text-white/50'
                size={18}
              />
              <input
                type='email'
                placeholder='Nhập email của bạn'
                className='w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-p-400 transition-all'
                required
              />
            </div>
            <button
              type='submit'
              className='bg-p-500 hover:bg-p-600 px-6 py-3 rounded-lg text-white font-medium transition-colors w-full'
            >
              Đăng ký
            </button>
          </form>
        </motion.div>
      </motion.div>

      {/* Dòng bản quyền */}
      <motion.div
        variants={fadeUp(0.5)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className='border-t border-white/10 text-center py-4 text-sm text-white/50'
      >
        © 2025 Tea Station — All Rights Reserved.
      </motion.div>
    </footer>
  );
}
