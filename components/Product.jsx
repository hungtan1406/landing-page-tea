'use client';
import { useState } from 'react';
import Image from 'next/image';
import Title from './Title';
import { motion, AnimatePresence } from 'framer-motion';

const teas = [
  {
    id: 'matcha',
    title: 'Matcha Magic',
    highlight: 'Khám phá những lợi ích tiềm năng của "vàng xanh" từ Nhật Bản',
    description: `Sẵn sàng nâng cao sức khỏe của bạn? Hãy làm quen với matcha, loại bột màu xanh lá cây rực rỡ đang làm khuynh đảo thế giới chăm sóc sức khỏe. Chứa đầy chất chống oxy hóa và chất dinh dưỡng, matcha cung cấp nguồn năng lượng mạnh mẽ mà không gây bồn chồn, nhờ sự kết hợp độc đáo giữa caffeine và L-theanine. 
    Loại trà này không chỉ tăng cường sự tập trung và trao đổi chất mà còn thêm hương vị thơm ngon cho sinh tố, đồ nướng và cả cà phê latte.`,
    btnText: 'Xem Sản Phẩm Matcha',
    image: '/product_1.jpg',
  },
  {
    id: 'trắng',
    title: 'Tinh chất tinh tế từ trà trắng',
    highlight: 'Hành trình khám phá hương vị tinh khiết nhất từ thiên nhiên',
    description: `Trà trắng, được tôn sùng vì sự nhẹ nhàng và tinh tế của nó, được chế biến từ lá non và nụ của cây Camellia sinensis. Với hương hoa nhẹ nhàng và vị ngọt tự nhiên, loại trà này mang đến trải nghiệm nhẹ nhàng nhưng sảng khoái. Giàu chất chống oxy hóa và ít caffeine, trà trắng không chỉ làm hài lòng khẩu vị mà còn hỗ trợ sức khỏe, khiến nó trở thành lựa chọn hoàn hảo cho những khoảnh khắc thư giãn hoặc trẻ hóa. Khám phá vẻ đẹp thanh bình của trà trắng và nâng tầm nghi thức uống trà của bạn lên một tầm cao mới.`,
    btnText: 'Xem Sản Phẩm Trà Trắng',
    image: '/product_2.jpg',
  },
  {
    id: 'ô long',
    title: 'Cuộc cách mạng trà ô long',
    highlight: 'Mở khóa bí mật của loại trà lành mạnh nhất từ ​​thiên nhiên',
    description: `Bạn có tò mò về bí quyết trường thọ và sống lâu không? Không cần tìm đâu xa, hãy tìm đến trà ô long! Thức uống cổ xưa này, được tôn sùng trong nhiều nền văn hóa trên thế giới, chứa đầy chất chống oxy hóa mạnh mẽ có thể thúc đẩy quá trình trao đổi chất, tăng cường chức năng não và thúc đẩy sức khỏe tim mạch. Với hương vị tinh tế và vô số lợi ích cho sức khỏe, trà ô long không chỉ là một thức uống mà còn là một lựa chọn về lối sống. Hãy tham gia cuộc cách mạng trà ô long và khám phá cách thức pha chế đơn giản này có thể biến đổi sức khỏe của bạn từng ngụm một!`,
    btnText: 'Xem Sản Phẩm Trà Ô Long',
    image: '/product_3.jpg',
  },
  {
    id: 'đen',
    title: 'Đánh thức các giác quan của bạn cùng trà đen',
    highlight: 'Hương vị đậm đà truyền thống vượt thời gian',
    description: `Hãy thưởng thức hương vị đậm đà, mạnh mẽ của trà đen, được chế tác hoàn hảo cho khẩu vị sành điệu. Mỗi ngụm trà mang đến sự pha trộn hài hòa giữa hương vị sâu lắng và hương thơm sảng khoái, khiến đây trở thành lựa chọn lý tưởng cho cả nghi lễ buổi sáng và giờ nghỉ trưa. Trải nghiệm sự ấm áp dễ chịu và những phẩm chất tràn đầy năng lượng đã khiến trà đen trở thành thức uống cổ điển được yêu thích trong nhiều thế kỷ.`,
    btnText: 'Xem Sản Phẩm Trà Đen',
    image: '/product_4.png',
  },
];

export default function Product() {
  const [active, setActive] = useState(teas[0]);

  return (
    <div id='product' className='container'>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false }}
      >
        <Title
          subTitle='tìm hiểu'
          mainTitle='sản phẩm'
          textGradient='trà ngon'
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false }}
        className='flex justify-center bg-p-50 px-4 md:px-10 xl:px-[200px] py-4 md:py-6 gap-4 md:gap-8 mb-10 mt-10'
      >
        {teas.map((tea) => (
          <div
            key={tea.id}
            onClick={() => setActive(tea)}
            className={`text-sm lg:text-base font-inter transition-colors cursor-pointer hover:text-p-900 capitalize ${
              active.id === tea.id ? 'text-p-900 font-semibold' : 'text-n-500'
            }`}
          >
            <span className='hidden md:inline-block'>Trà</span> {tea.id}
          </div>
        ))}
      </motion.div>

      <AnimatePresence mode='wait'>
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className='tabContainer flex flex-col md:flex-row items-center gap-8'
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className='relative w-full md:w-1/2 h-[250px] md:h-[700px] overflow-hidden'
          >
            <div className='absolute inset-0'>
              <Image
                src={active.image}
                alt={active.title}
                fill
                sizes='(max-width: 768px) 100vw, 50vw'
                className='object-cover rounded-md md:rounded-tr-[80px] md:rounded-br-[80px]'
                priority={active.id === teas[0].id}
                loading={active.id === teas[0].id ? 'eager' : 'lazy'}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className='text-2xl font-bold'>{active.title}</h3>
            <h4 className='text-lg text-gray-600'>{active.highlight}</h4>
            <p className='mt-4 text-gray-700'>{active.description}</p>
            <button className='mt-6 flex items-center bg-green-900 text-white px-6 py-3 cursor-pointer rounded-lg hover:bg-green-800 transition'>
              {active.btnText}
              <Image
                src='/right-arrow.svg'
                alt='arrow'
                width={16}
                height={16}
                className='ml-2'
              />
            </button>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
