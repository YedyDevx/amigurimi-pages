'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const CartItem = ({ item, addToCart, removeFromCart }) => {
  const itemTotal = parseFloat(item.price.replace(/[$,.]/g, '')) * item.quantity;

  return (
    <motion.div
    initial={{ y: -20, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.5, ease: "easeOut" }}
     className="w-full md:w-[330px] lg:w-[330px] xl:w-[330px] h-24 bg-gray-50 rounded-xl flex p-3 items-center justify-between shadow-md shadow-gray-500 mb-3">
      <div className='w-16 h-16 overflow-hidden bg-white rounded-lg shadow-md shadow-gray-500'>
        <Image src={item.img} alt={item.name} width={64} height={64} />
      </div>
      <div className='flex flex-col items-center'>
        <span className='text-lg'>{item.name}</span>
        <span>{itemTotal.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</span>
      </div>
      <div className="flex items-center gap-3">
        <button onClick={() => removeFromCart(item.id)} className="text-[#fb9a00] hover:text-[#226e78]">
          <FaMinus className="text-lg" />
        </button>
        <span className="text-xl">{item.quantity}</span>
        <button onClick={() => addToCart(item)} className="text-[#fb9a00] hover:text-[#226e78]">
          <FaPlus className="text-lg" />
        </button>
      </div>
      <MdDelete 
        onClick={() => removeFromCart(item.id, true)} 
        className="text-[#fb9a00] hover:text-[#226e78] cursor-pointer text-4xl"
      />
    </motion.div>
  );
};

export default CartItem;
