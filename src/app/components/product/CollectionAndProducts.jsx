"use client";
import { useState } from 'react';
import { useCart } from '../cart/CartContext';
import { FaDragon, FaPalette, FaUserCheck, FaCross } from "react-icons/fa";
import { GiCarKey } from "react-icons/gi";
import { IoFlowerSharp } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { BiSolidCameraMovie } from "react-icons/bi";
import { TbChristmasTree } from "react-icons/tb";
import { SiMarvelapp } from "react-icons/si";
import Img2 from '../../images/products/florero.png';
import Img3 from '../../images/products/caroline.png';
import Img6 from '../../images/products/payasoalicia.png';
import Img7 from '../../images/products/ricky.png';
import Img8 from '../../images/products/totoro.png';
import Img9 from '../../images/products/zoro.png';
import CollectionItem from './CollectionItem';
import ProductCard from './ProductCard';
import Pagination from './Pagination';

const CollectionItems = [
   { icon: <AiOutlineProduct className="text-[46px] text-[#1f6c76]" />, category: "Todos", description: "Todos los productos." },
   { icon: <BiSolidCameraMovie className="text-[46px] text-[#1f6c76]" />, category: "Personajes", description: "De series y películas." },
   { icon: <FaDragon className="text-[46px] text-[#1f6c76]" />, category: "Anime", description: "Personajes de Animes." },
   { icon: <SiMarvelapp className="text-[46px] text-[#1f6c76]" />, category: "Heroes", description: "Personajes de Héroes." },
   { icon: <FaPalette className="text-[46px] text-[#1f6c76]" />, category: "Artistas", description: "Artistas personalizados." },
   { icon: <IoFlowerSharp className="text-[46px] text-[#1f6c76]" />, category: "Flores", description: "Todas las flores." },
   { icon: <GiCarKey className="text-[46px] text-[#1f6c76]" />, category: "Llaveros", description: "Llaveros personalizados." },
   { icon: <FaUserCheck className="text-[46px] text-[#1f6c76]" />, category: "Retratos", description: "Retratos personalizados." },
   { icon: <TbChristmasTree className="text-[46px] text-[#1f6c76]" />, category: "Navidad", description: "Amigurumis navideños." },
   { icon: <FaCross className="text-[46px] text-[#1f6c76]" />, category: "Religión", description: "Amigurumis religiosos." },
];

const products = [
   { id: 1, name: "Vicent Van Gogh", category: "Artistas", price: "150.000$", status: "Encargo", img: Img2 },
   { id: 2, name: "Caroline", category: "Personajes", price: "80.000$", status: "Disponible", img: Img3 },
   { id: 3, name: "El Sombrerero", category: "Religión", price: "120.000$", status: "Encargo", img: Img6 },
   { id: 4, name: "Ricky", category: "Retratos", price: "80.000$", status: "Encargo", img: Img7 },
   { id: 5, name: "Totoro", category: "Anime", price: "150.000$", status: "Disponible", img: Img8 },
   { id: 7, name: "Zoro - One Piece", category: "Navidad", price: "80.000$", status: "Disponible", img: Img9 },
];

const PRODUCT_PAGE = 8;

export default function CollectionsAndProducts() {
   const [currentPage, setCurrentPage] = useState(1);
   const [selectedCategory, setSelectedCategory] = useState("Todos");
   const [searchQuery, setSearchQuery] = useState("");
   const { addToCart } = useCart();

   const lastProduct = currentPage * PRODUCT_PAGE;
   const firstProduct = lastProduct - PRODUCT_PAGE;

   const filteredProducts = products
      .filter(product => 
         (selectedCategory === "Todos" || product.category === selectedCategory) &&
         product.name.toLowerCase().includes(searchQuery.toLowerCase()) || product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );

   const currentProducts = filteredProducts.slice(firstProduct, lastProduct);
   const totalPages = Math.ceil(filteredProducts.length / PRODUCT_PAGE);

   return (
      <div className="max-w-[1500px] m-auto ">
         <div className='sm:text-3xl text-base font-lato font-bold text-[#1f6c76] mx-36 mb-5 flex justify-start'>Colecciones:</div>
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

         <div className="p-6 max-w-[1200px] mx-auto">
            <div className="flex my-5 justify-center gap-5">
               <label className="mt-2 text-2xl flex flex-col font-lato text-[#fb9a00] font-extrabold tracking-wide">
                  Encuentra tu Amigurumi:
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
