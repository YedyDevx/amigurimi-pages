"use client";
import { useState } from 'react';
import { useCart } from '../cart/CartContext';
import Image from 'next/image';
import Img2 from '../../images/products/florero.png';
import Img3 from '../../images/products/caroline.png';
import Img6 from '../../images/products/payasoalicia.png';
import Img7 from '../../images/products/ricky.png';
import Img8 from '../../images/products/totoro.png';
import Img9 from '../../images/products/zoro.png';
import { HiOutlineShoppingCart } from "react-icons/hi";
import ProductBuy from './ProductBuy';

const products = [
   { id: 1, name: "Vicent Van Gogh", category: "Art", price: "150.000$", img: Img2 },
   { id: 2, name: "Caroline", category: "Movies", price: "80.000$", img: Img3 },
   { id: 3, name: "El Sombrerero", category: "Movies", price: "120.000$", img: Img6 },
   { id: 4, name: "Ricky", category: "Series", price: "80.000$", img: Img7 },
   { id: 5, name: "Totoro", category: "Anime", price: "150.000$", img: Img8 },
   { id: 7, name: "Zoro - One Piece", category: "Anime", price: "80.000$", img: Img9 },
];

const PRODUCT_PAGE = 8;

export default function ProductsAll() {
   const [currentPage, setCurrentPage] = useState(1);
   const { addToCart } = useCart();

   const lastProduct = currentPage * PRODUCT_PAGE;
   const firstProduct = lastProduct - PRODUCT_PAGE;
   const currentProducts = products.slice(firstProduct, lastProduct);

   const paginate = (pageNumber) => setCurrentPage(pageNumber);

   const totalPages = Math.ceil(products.length / PRODUCT_PAGE);

   return (
      <div className="p-6 max-w-[1200px] mx-auto">
         <div className="flex gap-10 min-h-screen flex-wrap justify-center">
            {currentProducts.map((product, index) => (
               <div key={index} className="w-64 h-[440px] mb-5">
                  <div className="bg-white shadow-lg shadow-gray-600 rounded-2xl p-4 flex flex-col items-center transition-transform transform hover:scale-105 duration-300 ease-in-out">
                     <div className="w-full h-60 rounded-lg overflow-hidden mb-4">
                        <Image
                           className="object-cover w-full h-full"
                           src={product.img}
                           alt={product.name}
                           layout="responsive"
                        />
                     </div>
                     <div className="text-center mb-4">
                        <h3 className="font-lato text-xl font-bold text-gray-800 mb-1">
                           {product.name}
                        </h3>
                        <p className="font-itim text-md text-gray-500 mb-2">
                           {product.category}
                        </p>
                        <p className="font-lato text-xl font-bold text-green-600">
                           Precio: ${product.price}
                        </p>
                     </div>
                     <div className="flex gap-4 w-full">
                        <button
                           className="w-1/3 bg-[#fb9a00] text-white font-bold py-2 rounded-lg hover:bg-[#ffae4a] transition-colors duration-300 flex justify-center items-center"
                           onClick={() => addToCart(product)}
                        >
                           <HiOutlineShoppingCart className="text-2xl" />
                        </button>
                        <ProductBuy product={product} />
                     </div>
                  </div>
               </div>
            ))}
         </div>
         <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalPages }, (_, i) => (
               <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`px-4 py-2 rounded-lg sm:px-4 sm:py-2 ${
                     currentPage === i + 1
                     ? 'bg-[#fb9a00] text-white font-bold text-xl sm:text-xl'
                     : 'bg-gray-300 text-[#105c65]'
                  } hover:bg-[#f24877] hover:text-white font-bold transition-colors duration-300`}
               >
                  {i + 1}
               </button>
            ))}
         </div>
      </div>
   );
}
