import Image from 'next/image';
import Img2 from '../../images/products/florero.png';
import Img3 from '../../images/products/caroline.png';
import Img6 from '../../images/products/payasoalicia.png';
import Img7 from '../../images/products/ricky.png';
import Img8 from '../../images/products/totoro.png';
import Img9 from '../../images/products/zoro.png';
import { HiOutlineShoppingCart } from "react-icons/hi";

const products = [
   { name: "Vicent Van Gogh", category: "Art", price: "150.000$", img: Img2 },
   { name: "Caroline", category: "Movies", price: "80.000$", img: Img3 },
   { name: "El Sombrerero", category: "Movies", price: "120.000$", img: Img6 },
   { name: "Ricky", category: "Series", price: "80.000$", img: Img7 },
   { name: "Totoro", category: "Anime", price: "150.000$", img: Img8 },
   { name: "Zoro - One Piece", category: "Anime", price: "80.000$", img: Img9 },
   { name: "Zoro - One Piece", category: "Anime", price: "80.000$", img: Img9 },
   { name: "Zoro - One Piece", category: "Anime", price: "80.000$", img: Img9 },
   { name: "Zoro - One Piece", category: "Anime", price: "80.000$", img: Img9 },
   { name: "Zoro - One Piece", category: "Anime", price: "80.000$", img: Img9 },
   { name: "Zoro - One Piece", category: "Anime", price: "80.000$", img: Img9 },
   { name: "Zoro - One Piece", category: "Anime", price: "80.000$", img: Img9 },
   { name: "Zoro - One Piece", category: "Anime", price: "80.000$", img: Img9 },
   { name: "Zoro - One Piece", category: "Anime", price: "80.000$", img: Img9 },
];

export default function ProductsAll() {
   return (
      <div className="p-6 w-full">
         <div className="flex gap-8 min-h-screen  flex-wrap justify-center">
            {products.map((product, index) => (
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
                        <button className="w-1/3 bg-[#fb9a00] text-white font-bold py-2 rounded-lg hover:bg-[#ffae4a] transition-colors duration-300 flex justify-center items-center">
                           <HiOutlineShoppingCart className="text-2xl" />
                        </button>
                        <button className="w-2/3 bg-[#f24877] text-white font-bold py-2 rounded-lg hover:bg-pink-600 transition-colors duration-300">
                           Comprar ahora
                        </button>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}
