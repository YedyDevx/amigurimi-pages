"use client";
import { useState } from 'react';
import { useCart } from '../cart/CartContext';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import products from '../../data/products';
import CollectionItem from './CollectionItem';
import { FaDragon, FaPalette, FaUserCheck, FaCross, FaCat } from "react-icons/fa";
import { GiCarKey } from "react-icons/gi";
import { IoFlowerSharp } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { BiSolidCameraMovie } from "react-icons/bi";
import { TbChristmasTree } from "react-icons/tb";
import { SiMarvelapp } from "react-icons/si";

const CollectionItems = [
   { icon: <AiOutlineProduct className="text-[32px] text-[#1f6c76]" />, category: "Todos", description: "Todos los productos." },
   { icon: <BiSolidCameraMovie className="text-[32px] text-[#1f6c76]" />, category: "Personajes", description: "De series y películas." },
   { icon: <FaDragon className="text-[32px] text-[#1f6c76]" />, category: "Anime", description: "Personajes de Animes." },
   { icon: <SiMarvelapp className="text-[32px] text-[#1f6c76]" />, category: "Héroes", description: "Personajes de Héroes." },
   { icon: <FaPalette className="text-[32px] text-[#1f6c76]" />, category: "Artistas", description: "Artistas personalizados." },
   { icon: <IoFlowerSharp className="text-[32px] text-[#1f6c76]" />, category: "Flores", description: "Todas las flores." },
   { icon: <GiCarKey className="text-[32px] text-[#1f6c76]" />, category: "Llaveros", description: "Llaveros personalizados." },
   { icon: <FaUserCheck className="text-[32px] text-[#1f6c76]" />, category: "Retratos", description: "Retratos personalizados." },
   { icon: <TbChristmasTree className="text-[32px] text-[#1f6c76]" />, category: "Navidad", description: "Amigurumis navideños." },
   { icon: <FaCross className="text-[32px] text-[#1f6c76]" />, category: "Religión", description: "Amigurumis religiosos." },
   { icon: <FaCat className="text-[32px] text-[#1f6c76]" />, category: "Animales", description: "Animalitos." },
];

const PRODUCT_PAGE = 8;

export default function SectionAllProducts() {
   const [currentPage, setCurrentPage] = useState(1);
   const [searchQuery, setSearchQuery] = useState("");
   const [selectedCategory, setSelectedCategory] = useState("Todos");
   const { addToCart } = useCart();

   const lastProduct = currentPage * PRODUCT_PAGE;
   const firstProduct = lastProduct - PRODUCT_PAGE;

   const filteredProducts = products

      .filter(product => 
         (selectedCategory === "Todos" || product.category === selectedCategory) &&
         (product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
          product.category.toLowerCase().includes(searchQuery.toLowerCase()))
      );

   const currentProducts = filteredProducts.slice(firstProduct, lastProduct);
   const totalPages = Math.ceil(filteredProducts.length / PRODUCT_PAGE);

   return (
      <div className="max-w-[1500px] m-auto ">
         <div className="p-4 max-w-[1500px] mx-auto">
            <div className="flex flex-wrap justify-center gap-5">
               {CollectionItems.map((item, index) => (
                  <CollectionItem 
                     key={index} 
                     item={item} 
                     onClick={() => {
                        setSelectedCategory(item.category);
                        setCurrentPage(1); 
                     }}
                  />
               ))}
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-center my-5 justify-center gap-5">
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
            </div>
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
