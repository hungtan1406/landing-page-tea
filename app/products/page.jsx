'use client';
import Title from '@/components/Title';
import Image from 'next/image';
import React, { useState } from 'react';
import { productList } from '@/data/data';
import Cart from '@/components/Cart';
import { motion } from 'framer-motion';

const categories = ['all', 'blacktea', 'matcha', 'oolong', 'whitetea'];
function page() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const filteredProducts =
    selectedCategory === categories[0]
      ? productList
      : productList.filter((product) => product.category === selectedCategory);
  return (
    <div className='container mt-20'>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='relative w-full h-[350px] shadow-xl'
      >
        <Image
          src='/banners/banner1.jpg'
          alt='Product Image'
          fill
          className='object-cover rounded'
        />
      </motion.div>
      <div className='mt-4 md:mt-9'>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Title subTitle='Shop with us' mainTitle='tìm hiểu sản phẩm' />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='max-w-lg mt-2 text-sm text-n-500'
        >
          Cho dù bạn là người đam mê trà lâu năm hay mới bước chân vào thế giới
          trà, chúng tôi ở đây để giúp bạn khám phá loại trà pha trộn yêu thích
          tiếp theo của mình. Khám phá bộ sưu tập của chúng tôi và trải nghiệm
          nghệ thuật pha trà trong từng ngụm.
        </motion.p>
      </div>
      {/* products filter */}
      <div className='flex gap-8 mt-4 md:mt-9 mb-9'>
        {categories.map((category) => (
          <button
            key={category}
            className={`cursor-pointer px-4 py-2 rounded-md ${
              selectedCategory === category
                ? 'bg-p-700 text-white'
                : 'bg-n-100 text-gray-700'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category === 'all'
              ? 'Tất cả'
              : category === 'blacktea'
              ? 'Trà Đen'
              : category === 'matcha'
              ? 'Matcha'
              : category === 'oolong'
              ? 'Ô Long'
              : 'Trà Trắng'}
          </button>
        ))}
      </div>
      <div className='grid grid-cols-3 gap-4 md:grid-cols-6 lg:grid-cols-12 justify-center'>
        {filteredProducts.map((product) => (
          <Cart
            key={product.name}
            name={product.name}
            img={product.img}
            description={product.description}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
}

export default page;
