'use client';
import { motion } from 'framer-motion';
import { Pagination as AntPagination } from 'antd';

export default function Pagination({ totalPages, currentPage, onPageChange }) {
   return (
      <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3}}
      className="flex justify-center mt-14">
         <AntPagination
            current={currentPage}
            total={totalPages * 8} 
            pageSize={8} 
            onChange={onPageChange}
            showSizeChanger={false} 
            className={`px-4 py-2 text-lg font-bold rounded-lg sm:px-4 sm:py-2 transition-colors duration-300`}
         />
      </motion.div>
   );
}

