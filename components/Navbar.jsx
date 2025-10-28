'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: 'Sản Phẩm', href: '/products' },
    { name: 'Giới Thiệu', href: '/#story' },
    { name: 'Liên Hệ', href: '/#contact' },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const handleScroll = () => {
      setShowNavbar(window.scrollY < lastScrollY || window.scrollY < 10);
      setLastScrollY(window.scrollY);
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMounted]);

  useEffect(() => {
    if (!isMounted) return;
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMounted]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  if (!isMounted) {
    return (
      <nav className='fixed top-0 left-0 w-full z-50 h-20 bg-transparent'></nav>
    );
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${showNavbar ? 'translate-y-0' : '-translate-y-full'}
        ${
          scrolled ? 'bg-white/70 backdrop-blur-md shadow-md' : 'bg-transparent'
        }
      `}
    >
      <div className='max-w-[1530px] mx-auto flex justify-between items-center px-4 md:px-[72px] py-4 cursor-pointer'>
        <Link href='/' className='flex items-center space-x-2'>
          <img src='/logo.png' alt='Logo' className='h-12 w-12' />
          <span className='text-xl font-lobster text-p-900'>Tea Station</span>
        </Link>

        <div className='hidden md:flex space-x-10'>
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className='text-n-500 hover:text-p-900 font-inter font-medium transition-colors duration-200'
            >
              {link.name}
            </Link>
          ))}
        </div>
        <button
          className='md:hidden z-[60] text-p-900'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key='mobileMenu'
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.36, ease: 'easeInOut' }}
            className='fixed inset-0 bg-green-200/95 backdrop-blur-md flex flex-col items-center justify-start gap-y-6 md:hidden z-[55] min-h-screen pt-24'
            aria-modal='true'
            role='dialog'
          >
            <motion.ul
              className='w-full flex flex-col items-center justify-start gap-y-6'
              initial='hidden'
              animate='visible'
              exit='hidden'
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.06, delayChildren: 0.05 },
                },
              }}
            >
              {links.map((link, i) => (
                <motion.li
                  key={link.name}
                  className='w-full flex justify-center'
                  variants={{
                    hidden: { opacity: 0, y: 8 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className='text-2xl font-semibold text-gray-800 hover:text-green-600 transition-all text-center px-4'
                    style={{ maxWidth: 720 }}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
