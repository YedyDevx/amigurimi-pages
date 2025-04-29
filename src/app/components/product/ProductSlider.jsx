'use client';
import Image from 'next/image';
import Marquee from '../../../components/ui/marquee';
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useCart } from '../cart/CartContext';
import Img2 from '../../images/products/florero.png';
import Img3 from '../../images/products/caroline.png';
import Img6 from '../../images/products/payasoalicia.png';
import Img7 from '../../images/products/ricky.png';
import Img8 from '../../images/products/totoro.png';
import Img9 from '../../images/products/zoro.png';
import ProductBuy from './ProductBuy';

export default function Slider() {
   const { addToCart } = useCart();

   const products = [
      { id: 1, name: "Vicent Van Gogh", category: "Artistas", price: "150.000$", status: "Encargo", img: Img2 },
      { id: 2, name: "Caroline", category: "Caricaturas", price: "80.000$", status: "Disponible", img: Img3 },
      { id: 3, name: "El Sombrerero", category: "Caricaturas", price: "120.000$", status: "Encargo", img: Img6 },
      { id: 4, name: "Ricky", category: "Caricaturas", price: "80.000$", status: "Encargo", img: Img7 },
      { id: 5, name: "Totoro", category: "Anime", price: "150.000$", status: "Disponible", img: Img8 },
      { id: 7, name: "Zoro - One Piece", category: "Anime", price: "80.000$", status: "Disponible", img: Img9 },
   ];

   return (
      <div className="px-4 w-full h-[500px]">
         <div className='flex justify-between px-5 my-5'>
            <div className='sm:text-3xl text-base font-lato font-bold text-[#1f6c76]'>
               Productos más vendidos:
            </div>
         </div>
         <Marquee gradient={false} speed={40} pauseOnHover={true}>
            <div className="flex gap-8 flex-wrap justify-center">
               {products.map((product, index) => (
                  <div
                     key={index}
                     className="w-64 h-[440px] mb-5 bg-white shadow-lg shadow-gray-600 rounded-2xl p-4 flex flex-col items-center transition-transform transform hover:scale-105 duration-300 ease-in-out"
                  >
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
               ))}
            </div>
         </Marquee>
      </div>
   );
}
