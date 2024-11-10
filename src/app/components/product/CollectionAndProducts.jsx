"use client";
import { useState } from 'react';
import { useCart } from '../cart/CartContext';

// Iconos
import { FaDragon, FaPalette, FaUserCheck, FaCross, FaCat } from "react-icons/fa";
import { GiCarKey } from "react-icons/gi";
import { IoFlowerSharp } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { BiSolidCameraMovie } from "react-icons/bi";
import { TbChristmasTree } from "react-icons/tb";
import { SiMarvelapp } from "react-icons/si";

// Imágenes de productos
import anime1 from '../../images/product/anime1.png';
import Anime2 from '../../images/product/anime2.png';
import Anime3 from '../../images/product/anime3.png';
import Anime4 from '../../images/product/anime4.png';
import Anime5 from '../../images/product/anime5.png';
import Anime6 from '../../images/product/anime6.png';
import Anime10 from '../../images/product/anime10.png';
import flores1 from '../../images/product/flores1.png';
import flores2 from '../../images/product/flores2.png';
import flores3 from '../../images/product/flores3.png';
import flores4 from '../../images/product/flores4.png';
import flores8 from '../../images/product/flores8.png';
import Personaje from '../../images/product/personaje.png';
import personaje1 from '../../images/product/personaje1.png';
import personaje2 from '../../images/product/personaje2.png';
import personaje3 from '../../images/product/personaje3.png';
import personaje13 from '../../images/product/personaje13.png';
import navidad from '../../images/product/navidad.png';
import perrito from '../../images/product/perrito.png';
import hellokty from '../../images/product/personaje6.png';
import rapunsel from '../../images/product/personaje4.png';
import Harrystyles from '../../images/product/artista1.png';
import vicent from '../../images/product/artista.png';
import messi from '../../images/product/artista3.png';
import heroe1 from '../../images/product/heroes1.png';
import heroe2 from '../../images/product/heroes2.png';
import heroe3 from '../../images/product/heroes3.png';
import virgen1 from '../../images/product/virgen1.png';
import virgen2 from '../../images/product/virgen2.png';
import virgen3 from '../../images/product/virgen3.png';
import virgen4 from '../../images/product/virgen4.png';
import llavero1 from '../../images/product/llavero1.png';

// Componentes internos
import CollectionItem from './CollectionItem';
import ProductCard from './ProductCard';
import Pagination from './Pagination';

// Datos de las colecciones
const CollectionItems = [
   { icon: <AiOutlineProduct className="text-[46px] text-[#1f6c76]" />, category: "Todos", description: "Todos los productos." },
   { icon: <BiSolidCameraMovie className="text-[46px] text-[#1f6c76]" />, category: "Personajes", description: "De series y películas." },
   { icon: <FaDragon className="text-[46px] text-[#1f6c76]" />, category: "Anime", description: "Personajes de Animes." },
   { icon: <SiMarvelapp className="text-[46px] text-[#1f6c76]" />, category: "Héroes", description: "Personajes de Héroes." },
   { icon: <FaPalette className="text-[46px] text-[#1f6c76]" />, category: "Artistas", description: "Artistas personalizados." },
   { icon: <IoFlowerSharp className="text-[46px] text-[#1f6c76]" />, category: "Flores", description: "Todas las flores." },
   { icon: <GiCarKey className="text-[46px] text-[#1f6c76]" />, category: "Llaveros", description: "Llaveros personalizados." },
   { icon: <FaUserCheck className="text-[46px] text-[#1f6c76]" />, category: "Retratos", description: "Retratos personalizados." },
   { icon: <TbChristmasTree className="text-[46px] text-[#1f6c76]" />, category: "Navidad", description: "Amigurumis navideños." },
   { icon: <FaCross className="text-[46px] text-[#1f6c76]" />, category: "Religión", description: "Amigurumis religiosos." },
   { icon: <FaCat className="text-[46px] text-[#1f6c76]" />, category: "Animales", description: "Animalitos." },
];

const products = [
   { id: 1, name: "Sailor Moon", category: "Anime", price: "80.000$", status: "Disponible", img: anime1 },
   { id: 2, name: "Tanjito Kamado", category: "Anime", price: "95.000$", status: "Disponible", img: Anime2 },
   { id: 3, name: "Luffy", category: "Anime", price: "110.000$", status: "Disponible", img: Anime3 },
   { id: 4, name: "Zoro", category: "Anime", price: "125.000$", status: "Disponible", img: Anime4 },
   { id: 5, name: "Nezuko", category: "Anime", price: "85.000$", status: "Disponible", img: Anime5 },
   { id: 6, name: "Combo Zoro", category: "Anime", price: "150.000$", status: "Disponible", img: Anime6 },
   { id: 7, name: "Naruto Uzumaki", category: "Anime", price: "65.000$", status: "Disponible", img: Anime10 },
   { id: 8, name: "Florero de Girasoles", category: "Flores", price: "65.000$", status: "Disponible", img: flores1 },
   { id: 9, name: "Florero de Rapunsel", category: "Flores", price: "65.000$", status: "Disponible", img: flores2 },
   { id: 10, name: "Flores con Vaquita", category: "Flores", price: "65.000$", status: "Disponible", img: flores3 },
   { id: 11, name: "Flores de colores", category: "Flores", price: "65.000$", status: "Disponible", img: flores4 },
   { id: 13, name: "Girasoles", category: "Flores", price: "65.000$", status: "Disponible", img: flores8 },
   { id: 14, name: "El Principito", category: "Personajes", price: "65.000$", status: "Disponible", img: Personaje },
   { id: 15, name: "Personalizado", category: "Retratos", price: "65.000$", status: "Disponible", img: personaje1 },
   { id: 16, name: "Harry Potter", category: "Personajes", price: "65.000$", status: "Disponible", img: personaje13 },
   { id: 17, name: "Cascanues", category: "Navidad", price: "65.000$", status: "Disponible", img: navidad },
   { id: 18, name: "Carl Fredricksen - Up", category: "Personajes", price: "65.000$", status: "Disponible", img: personaje2 },
   { id: 19, name: "Ellie Fredricksen", category: "Personajes", price: "65.000$", status: "Disponible", img: personaje3 },
   { id: 20, name: "Hello Kitty", category: "Personajes", price: "65.000$", status: "Disponible", img: hellokty },
   { id: 21, name: "Rapunsel", category: "Personajes", price: "65.000$", status: "Disponible", img: rapunsel },
   { id: 22, name: "Perrito", category: "Animales", price: "65.000$", status: "Disponible", img: perrito },
   { id: 23, name: "Cascanues", category: "Navidad", price: "65.000$", status: "Disponible", img: navidad },
   { id: 24, name: "Harry Style", category: "Artistas", price: "65.000$", status: "Disponible", img: Harrystyles },
   { id: 25, name: "Vicent Van Gogh", category: "Artistas", price: "65.000$", status: "Disponible", img: vicent },
   { id: 26, name: "Leonel Messi", category: "Personaje", price: "65.000$", status: "Disponible", img: messi },
   { id: 27, name: "Guardian de la Galaxia", category: "Héroes", price: "65.000$", status: "Disponible", img: heroe1 },
   { id: 28, name: "Super Man", category: "Héroes", price: "65.000$", status: "Disponible", img: heroe2 },
   { id: 29, name: "Super Girl", category: "Héroes", price: "65.000$", status: "Disponible", img: heroe3 },
   { id: 30, name: "Virgen", category: "Religión", price: "65.000$", status: "Disponible", img: virgen1 },
   { id: 31, name: "Angel", category: "Religión", price: "65.000$", status: "Disponible", img: virgen2 },
   { id: 32, name: "Angel", category: "Religión", price: "65.000$", status: "Disponible", img: virgen3 },
   { id: 33, name: "Angel", category: "Religión", price: "65.000$", status: "Disponible", img: virgen4 },
   { id: 34, name: "Llavero Zoro", category: "Llaveros", price: "65.000$", status: "Disponible", img: llavero1 },
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
         (product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
          product.category.toLowerCase().includes(searchQuery.toLowerCase()))
      );

   const currentProducts = filteredProducts.slice(firstProduct, lastProduct);
   const totalPages = Math.ceil(filteredProducts.length / PRODUCT_PAGE);

   return (
      <div className="max-w-[1500px] m-auto ">
         <div className='sm:text-3xl text-base font-lato font-bold text-[#1f6c76] mx-36 mb-5 mt-10 flex justify-start'>Colecciones:</div>
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
