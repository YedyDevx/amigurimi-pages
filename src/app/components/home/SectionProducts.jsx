"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../cart/CartContext';
import ProductCard from '../product/ProductCard';
import Pagination from '../product/Pagination';
import products from '../../data/products';

const PRODUCT_PAGE = 8;

export default function SectionProducts() {
   const [currentPage, setCurrentPage] = useState(1);
   const [searchQuery, setSearchQuery] = useState("");
   const { addToCart } = useCart();

   const lastProduct = currentPage * PRODUCT_PAGE;
   const firstProduct = lastProduct - PRODUCT_PAGE;

   const filteredProducts = products

      .filter(product => 
         (product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
          product.category.toLowerCase().includes(searchQuery.toLowerCase()))
      );

   const currentProducts = filteredProducts.slice(firstProduct, lastProduct);
   const totalPages = Math.ceil(filteredProducts.length / PRODUCT_PAGE);

   return (
      <div className="max-w-[1500px] m-auto ">
         <div className="p-6 max-w-[1200px] mx-auto">
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1}}
            className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-center my-5 justify-center gap-5">
               <label className="mt-2 text-2xl flex flex-col font-lato text-[#fb9a00] font-extrabold tracking-wide">
                  Todos nuestros Amigurumi:
                  <span className='text-sm text-center'>
                     (Pregunte por el que no vea)
                  </span>
               </label>
               <input
                  type="text"
                  placeholder="Buscar amigurumis..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="p-3 border text-xl font-itim  border-[#1f6c76] rounded-lg w-80 lg:w-96 focus:outline-none focus:ring-2 focus:ring-[#fb9a00] focus:border-transparent shadow-md placeholder-[#1f6c76] text-[#1f6c76] transition duration-300 ease-in-out"
               />
            </motion.div>
            <div className="flex gap-10 min-h-screen flex-wrap justify-center">
               {currentProducts.map((product) => (
                  <ProductCard key={product.id} product={product} addToCart={addToCart} />
               ))}
            </div>
            <Pagination 
               totalPages={totalPages} 
               currentPage={currentPage} 
               onPageChange={setCurrentPage} 
            />
         </div>
      </div>
   );
}
